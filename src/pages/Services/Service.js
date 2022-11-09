import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Service = () => {
  const service = useLoaderData();
  const { _id, title, banner, thumb, duration, price, about, details } =
    service;
  return (
    <div>
      <div className="m-10">
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img src={thumb} className="w-3/4 h-3/4 rounded-xl" alt={title} />
          </figure>
          <div className="card-body mx-20">
            <h2 className="card-title">{title}</h2>
            <p>{about}</p>
            <div className="card-actions justify-between my-4">
              <div>
                <p>
                  <strong className="text-primary text-xl">
                    Price:${price}
                  </strong>
                </p>
              </div>
              <div>
                <p>
                  <strong className="text-primary text-xl">
                    Package Duration:{duration}
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card lg:card-side bg-base-100 my-10 shadow-xl">
          <figure className="w-1/2">
            <img src={banner} className="w-full" alt="Album" />
          </figure>
          <div className="card-body w-1/2">
            <h2 className="card-title">{title}</h2>
            <p>{details}</p>
            <div className="card-actions justify-between my-4">
              <Link to={`/give-review/${_id}`}>
                <button className="btn btn-outline btn-warning hover:rounded-full">
                  Give Review
                </button>
              </Link>
              <Link to={`/checkout/${_id}`}>
                <button className="btn btn-outline btn-primary hover:rounded-full">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Review Section */}
      <div className="my-20 mx-10">
        <h1 className="text-4xl font-bold text-center text-sky-400 my-5">
          Review Section
        </h1>
      </div>
    </div>
  );
};

export default Service;