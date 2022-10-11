import React from "react";
const Post = ({ post: { title, body, imgUrl, date, src, width }, index }) => {
  return (
    <div className={`${width ? width : "col-md-6"}`}>
      <div className="custom-card">
        <figure className="overflow-hidden">
          <img
            className="custom-card-img imgHoverZoomOut"
            src={imgUrl}
            alt="brown couch"
          ></img>
        </figure>
        <div className="custom-card-content">
          <time dateTime="2021-03-30" className="custom-card-date">
            {date}
          </time>
          <h3 className="custom-card-title">{title}</h3>
          <p className="custom-card-text">{body}</p>
          <div className="custom-card-footer">
            <p>
              <a className="btn btn-primary" href="#">
                View details
              </a>
            </p>
            <small>
              {src ? (
                <>
                  Quelle:
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.ingenieure-ohne-grenzen.org/de/unsere-arbeit/projekte/BILA-DD-01"
                  >
                    {src}
                  </a>
                </>
              ) : null}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
