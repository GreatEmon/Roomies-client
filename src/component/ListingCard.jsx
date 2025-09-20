import React from "react";
import { Link } from "react-router";

const ListingCard = ({ listing }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl border border-gray-200">
      <div className="card-body">
        {/* Title & Location */}
        <h2 className="card-title text-xl font-semibold">
          {listing.title}
        </h2>
        <p className="text-sm text-gray-500">{listing.location}</p>

        {/* Rent & Room Type */}
        <div className="flex items-center gap-4 mt-3">
          <span className="badge badge-primary badge-outline">
            ৳ {listing.rentAmount}
          </span>
          <span className="badge badge-secondary badge-outline">
            {listing.roomType}
          </span>
          {listing.availability ? (
            <span className="badge badge-success">Available</span>
          ) : (
            <span className="badge badge-error">Not Available</span>
          )}
        </div>

        {/* Lifestyle Preferences */}
        <div className="mt-4">
          <p className="font-medium mb-1 text-sm text-gray-700">
            Lifestyle Preferences:
          </p>
          <div className="flex flex-wrap gap-2">
            {listing.lifestylePreferences.map((pref, idx) => (
              <span key={idx} className="badge badge-outline">
                {pref}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-700 text-sm">
          {listing.description}
        </p>

        {/* Contact & User Info */}
        <div className="mt-4 text-sm">
          <p>
            <span className="font-semibold">Contact:</span>{" "}
            {listing.contactInfo}
          </p>
          <p>
            <span className="font-semibold">User:</span>{" "}
            {listing.userName} ({listing.userEmail})
          </p>
        </div>

        {/* Action Button */}
        <div className="card-actions mt-4">
          <Link className="btn btn-primary w-full" to={`/details/${listing._id}`}>
            See More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ListingCard