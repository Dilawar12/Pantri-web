import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { asyncGetRecipes } from "../store/user/userAction";
import BreadCumb from "../Components/Common/BreadCumb";
import SectionTitle from "../Components/Common/SectionTitle";
import { Container, Row, Col, Card, Button, Form, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { setRecipesDetail } from "../store/user/userSlice";
import BreadCumbAbout from "../Components/Common/BreadCumbAbout";

const sectionOne = "../../assets/images/cart-to-table-section-1.png";

const RecipeSearch = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const fetchRecipes = async () => {
        if (!query.trim()) return;

        setLoading(true);
        try {
            const { success, data } = await dispatch(asyncGetRecipes({ q: query })).unwrap();
            if (success) {
                setRecipes(data.hits || []);
            }
        } catch (err) {
            console.error("Error fetching recipes:", err);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="service-detail">
            {/* <BreadCumb Title="Cart-to-Table Recipe Finder" image={sectionOne} /> */}
            {/* <BreadCumbAbout image={sectionOne} /> */}
            <Container className="py-5">
                <div className="text-center mb-5">
                    <SectionTitle
                        SubTitle="Explore the Recipes"
                        Title="Cart-to-Table Recipe Finder"
                    />
                    <Form className="d-flex justify-content-center mt-4" onSubmit={(e) => e.preventDefault()}>
                        <Form.Control
                            type="text"
                            placeholder="Search recipes (e.g., pasta, salad)..."
                            className="w-50 me-2"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button className="custom-btn-style " style={{
                            width: '150px'
                        }} onClick={fetchRecipes}>
                            <i className="bi bi-search me-2"></i> Search
                        </button>
                    </Form>
                </div>

                {loading && (
                    <div className="text-center my-4">
                        <Spinner animation="border" variant="success" />
                        <p className="text-muted mt-2">Loading recipes...</p>
                    </div>
                )}

                <Row className="g-4">
                    {recipes.map(({ recipe }, i) => (
                        <Col key={i} xs={12} sm={6} md={4} lg={3}>
                            <Card className="h-100 shadow-sm border-0 hover-shadow">
                                <Card.Img
                                    variant="top"
                                    src={recipe.image}
                                    alt={recipe.label}
                                    style={{ height: "200px", objectFit: "cover" }}
                                />

                                <Card.Body className="d-flex flex-column">
                                    <Card.Title className="fs-6 text-truncate mb-2">
                                        {recipe.label}
                                    </Card.Title>

                                    {/* --- Info Grid --- */}
                                    <div className="text-muted small mb-3">
                                        {/* First Row */}
                                        <div className="d-flex justify-content-between">
                                            <span>
                                                <strong>Total Weight:</strong>{" "}
                                                {recipe.totalWeight ? `${recipe.totalWeight.toFixed(0)} g` : "N/A"}
                                            </span>
                                            <span>
                                                <strong>Calories:</strong>{" "}
                                                {recipe.calories ? `${Math.round(recipe.calories)} kcal` : "N/A"}
                                            </span>
                                        </div>

                                        {/* Second Row */}
                                        <div className="d-flex justify-content-between mt-1">
                                            <span>
                                                <strong>Cuisine:</strong>{" "}
                                                {recipe.cuisineType?.join(", ") || "N/A"}
                                            </span>
                                            <span>
                                                <strong>Meal:</strong>{" "}
                                                {recipe.mealType?.join(", ") || "N/A"}
                                            </span>
                                        </div>
                                    </div>

                                    {/* --- View Button --- */}
                                    {/* <Button variant="success" className="mt-auto w-100">
                                        View Recipe & Ingredients
                                    </Button> */}
                                    <button className="custom-btn-style" onClick={() => {
                                        dispatch(setRecipesDetail(recipe));
                                        navigate('/recipeDetails');
                                    }} type="submit">View Recipe & Ingredients <i className="bi bi-arrow-right"></i></button>

                                </Card.Body>
                            </Card>
                        </Col>
                    ))}

                </Row>

                {!loading && recipes.length === 0 && (
                    <p className="text-center text-muted mt-5">
                        No recipes found. Try searching for something tasty!
                    </p>
                )}
            </Container>
        </div>
    );
};

export default RecipeSearch;
