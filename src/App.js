import React, { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Context } from "./index.js";
import { Home } from "./pages/Home.js";
import Page404 from "./pages/404.js";

function App() {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
    /* localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAbWFpbC5ydSIsImlkIjoiNjNmNWU0NDRmZmE0OWQ0ZThmNDI3MzY3IiwiaXNBY3RpdmF0ZWQiOmZhbHNlLCJyb2xlIjoidXNlciIsIm5hbWUiOiJNYWtrYSIsInN1cm5hbWUiOiJBa2hyaWV2YSIsInBob25lIjoiKzM3NTI5NTE0NTQ1NiIsImZhdm91cml0ZXMiOlt7Il9pZCI6IjYzZjc1Mzg0OGM3MTcxNDUzMmEyMTM2ZiIsIm5hbWUiOiJOYW1lMiIsImxvY2F0aW9uIjp7ImxhdCI6NTMuODg4OTI1NTI0ODY1NywibG5nIjoyNy40ODYyNTU3Mjc5ODU2MzZ9LCJhZGRyZXNzIjoiVkZRUCtIRyDQnNC40L3RgdC6LCDQkdC10LvQsNGA0YPRgdGMIiwiX192IjowfSx7Il9pZCI6IjYzZjc1MzgyOGM3MTcxNDUzMmEyMTM2YyIsIm5hbWUiOiJuYW1lIiwibG9jYXRpb24iOnsibGF0Ijo1My45MDQ1MDI2NTczMzIzOSwibG5nIjoyNy40ODA3NjI1NjM5MjMxMzZ9LCJhZGRyZXNzIjoi0YPQuy4g0JHQtdC70YzRgdC60L7Qs9C-IDE2LCDQnNC40L3RgdC6LCDQkdC10LvQsNGA0YPRgdGMIiwiX192IjowfSx7Il9pZCI6IjY0MDA0YmI4Zjc1OWNkZmU3YmVlMzg0MCIsIm5hbWUiOiLQo9C7LiDQktC-0LvQvtGF0LAsIDEgKFRab25lKSIsImxvY2F0aW9uIjp7ImxhdCI6NTMuODk4NDMzNjg1MzAyNzM0LCJsbmciOjI3LjUyNTYxNzU5OTQ4NzMwNX0sImFkZHJlc3MiOiLRg9C7LiDQktC-0LvQvtGF0LAgIDEsINCc0LjQvdGB0LogLCDQkdC10LvQsNGA0YPRgdGMIiwicGx1Z1R5cGUiOiJUeXBlMiIsInBvd2VyIjoyMiwicHJpY2UiOjAuNCwiX192IjowfV0sImlhdCI6MTY3ODEzNzc1OSwiZXhwIjoxNjc4MTM5NTU5fQ.JHuTOrA4uhlqL3Qsq5PN7kbo9vqY9o0WULmr75jIEpk",
    ); */
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;

