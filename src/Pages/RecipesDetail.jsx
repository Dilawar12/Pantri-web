import { useSelector } from "react-redux";
import { selectRecipesDetail } from "../store/user/userSlice";

const RecipesDetail = () => {
    const recipe = useSelector(selectRecipesDetail);
    if (!recipe) {
        return (
            <div className="flex items-center justify-center h-screen text-gray-600">
                No recipe details available.
            </div>
        );
    }

    const {
        label,
        image,
        cuisineType,
        mealType,
        calories,
        totalWeight,
        totalTime,
        ingredients,
        yield: servings,
        source,
        url,
        healthLabels,
        digest
    } = recipe;
    const prepTime = Math.floor(totalTime * 0.3);
    const cookTime = totalTime - prepTime;
    return (
        <div className="blog-details-area">
            <div className="container">
                <div className="row">
                    {/* LEFT SIDE - Recipe Details */}
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="blog-details-thumb">
                                    <img src={image} alt={label} />
                                </div>

                                <div className="blog-details-content">
                                    <div className="meta-blog">
                                        <span className="mate-text">By {source}</span>
                                        <span>
                                            <i className="bi bi-calendar-check-fill"></i> Published Today
                                        </span>
                                    </div>

                                    <h4 className="blog-details-title">{label}</h4>

                                    {/* Recipe Info */}
                                    <div className="row mb-4">
                                        <div className="col-md-6 mb-2">
                                            <strong>Cuisine Type:</strong>{" "}
                                            {cuisineType?.join(", ") || "N/A"}
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <strong>Meal Type:</strong>{" "}
                                            {mealType?.join(", ") || "N/A"}
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <strong>Calories:</strong> {Math.round(calories)} kcal
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <strong>Total Weight:</strong>{" "}
                                            {Math.round(totalWeight)} g
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <strong>Prep Time:</strong> {prepTime} mins
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <strong>Cook Time:</strong> {cookTime} mins
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <strong>Total Time:</strong> {totalTime} mins
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <strong>Servings:</strong> {servings || 4}
                                        </div>
                                    </div>

                                    {/* INGREDIENTS TABLE */}
                                    <h3 className="text-xl font-semibold text-green-700 mb-3">
                                        Ingredients
                                    </h3>
                                    <div className="overflow-x-auto mb-8">
                                        <table className="table  table-sm align-middle">
                                            <thead className="">
                                                <tr>
                                                    <th scope="col">Ingredient</th>
                                                    <th scope="col">Quantity</th>
                                                    <th scope="col">Measure</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {ingredients?.map((item, i) => (
                                                    <tr key={i} >
                                                        <td >{item.text}</td>
                                                        <td >
                                                            {item.quantity ? item.quantity.toFixed(1) : "-"}
                                                        </td>
                                                        <td >{item.measure || "-"}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* DIGEST TABLE */}
                                    <h5 className="mt-5 mb-3 text-success">Nutritional Breakdown</h5>
                                    <div className="table-responsive pe-4">
                                        <table className="table  table-sm align-middle">
                                            <thead className="">
                                                <tr>
                                                    <th scope="col">Nutrient</th>
                                                    <th scope="col">Label</th>
                                                    <th scope="col">Total</th>
                                                    <th scope="col">Daily %</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {digest?.map((nutrient, i) => (
                                                    <tr key={i}>
                                                        <td>{nutrient.tag}</td>
                                                        <td>{nutrient.label}</td>
                                                        <td>
                                                            {nutrient.total
                                                                ? `${nutrient.total.toFixed(1)} ${nutrient.unit}`
                                                                : "-"}
                                                        </td>
                                                        <td>
                                                            {nutrient.daily
                                                                ? `${nutrient.daily.toFixed(1)}%`
                                                                : "-"}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Instructions */}
                                    <h3 className="blog-details-title two">Instructions</h3>
                                    <p className="blog-details-desc">
                                        Follow the detailed recipe instructions from the source link
                                        below for preparation and cooking guidance.
                                    </p>
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-success mt-2"
                                    >
                                        View Full Recipe on {source}
                                    </a>
                                </div>


                                {/* Social & Tags */}
                                <div className="blog-details-socila-box">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="blog-details-category">
                                                {cuisineType?.map((tag, i) => (
                                                    <span key={i}>
                                                        <a href="#">{tag}</a>
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="blog-details-social-icon">
                                                <ul>
                                                    <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                                                    <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                                                    <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                                                    <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE - Sidebar */}
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="widget-sidber">
                                    <div className="widget-sidber-content">
                                        <h4>Quick Info</h4>
                                    </div>
                                    <div className="widget-category">
                                        <ul>
                                            <li><strong>Calories:</strong> {Math.round(calories)} kcal</li>
                                            <li><strong>Weight:</strong> {Math.round(totalWeight)} g</li>
                                            <li><strong>Servings:</strong> {servings || 4}</li>
                                            <li><strong>Total Time:</strong> {totalTime} mins</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="widget-sidber">
                                    <div className="widget-sidber-content">
                                        <h4>Health Labels</h4>
                                    </div>
                                    <div className="widget-catefories-tags">
                                        {(healthLabels || []).map((tag, i) => (
                                            <a href="#" key={i}>{tag}</a>
                                        ))}
                                    </div>
                                </div>
                                <div className="widget-sidber">
                                    <div className="widget-sidber-content">
                                        <h4>Tags</h4>
                                    </div>
                                    <div className="widget-catefories-tags">
                                        {mealType?.concat(cuisineType || []).map((tag, i) => (
                                            <a href="#" key={i}>{tag}</a>
                                        ))}
                                    </div>
                                </div>
                                <div className="widget-sidber">
                                    <div className="widget-sidber-content">
                                        <h4>Source</h4>
                                    </div>
                                    <p>
                                        Recipe by <strong>{source}</strong>
                                    </p>
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-outline-success btn-sm mt-2"
                                    >
                                        Visit Source
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RecipesDetail;
