import React from "react";

export default function NotFound({ fetchError }) {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg"></div>

              <div className="contant_box_404">
                <h1
                  style={{ textAlign: "center", paddingBottom: "50px" }}
                  className="text-center "
                >
                  {" "}
                  Возникла ошибка
                </h1>
                <p style={{ textAlign: "center" }}></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
