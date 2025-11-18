export function responseCallback(res) {
  const messages = res.data?.message || [res.statusText];
  // if (res?.status === 500) {
  //   // store.dispatch(asyncAlertError("Internal Server Error - 500"));
  // }
  // if (res?.status === 401) {
  //   // if (message.includes('Expired') || res?.data?.code === 'invalid_token') {
  //   //   //   store.dispatch(
  //   //   //     asyncAlertError(
  //   //   //       "Token Expired or Tempered Trying To ReAuthenticate - 401"
  //   //   //     )
  //   //   //   );
  //   //   //   store.dispatch(setAuth(null));
  //   // }
  // }
  // if (res?.status === 404) {
  //   // store.dispatch(asyncAlertError("Resource Not Found - 404"));
  // }
  if ([500, 404, 401, 400, 409].includes(res?.status)) {
    return {
      status: res?.status,
      ...(res?.data ?? {}),
      messages,
      succeeded: false,
    };
  }
  return res?.data ?? {};
}
