import { TApp } from "@/types/apps.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type TAppCard = {
  app: TApp;
};

const AppCards = ({ app }: TAppCard) => {
  return (
    

    <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {" "}
      {/* App Info */}{" "}
      <div className="flex gap-4">
        {" "}
        {/* App Logo */}{" "}
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-gray-200">
          {" "}
          <Image
            src={app.image}
            alt="WhatsApp Messenger"
            fill
            className="object-cover"
            />{" "}
        </div>{" "}
        {/* App Details */}{" "}
        <div className="min-w-0 flex-1">
          {" "}
          <h2 className="truncate text-xl font-bold text-gray-900">
            {app.title}
          </h2>{" "}
          <p className="mt-1 text-sm line-clamp-1 text-gray-500">{app.companyName}</p>{" "}
          <div className="mt-2 flex items-center gap-3 text-sm">
            {" "}
            <span className="font-semibold text-gray-900">
              {app.ratingAvg}
            </span>{" "}
            <span className="text-gray-400">•</span>{" "}
            <span className="text-gray-600">{app.downloads}</span>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Description */}{" "}
      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
        {app.description}
      </p>{" "}
      {/* Stats */}{" "}
      <div className="mt-5 flex items-center justify-between rounded-xl bg-gray-50 p-4">
        {" "}
        <div>
          {" "}
          <p className="text-xs text-gray-500">Reviews</p>{" "}
          <p className="mt-1 font-semibold text-gray-900">{app.reviews}</p>{" "}
        </div>{" "}
        <div>
          {" "}
          <p className="text-xs text-gray-500">Size</p>{" "}
          <p className="mt-1 font-semibold text-gray-900">{app.size} </p>{" "}
        </div>{" "}
        <div>
          {" "}
          <p className="text-xs text-gray-500">Rating</p>{" "}
          <p className="mt-1 font-semibold text-gray-900">
            {app.ratingAvg}⭐{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
      {/* Button */}{" "}
      <Link href={`/apps/${app.id}`}><button className="mt-5 w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700">
        {" "}
        View Details{" "}
      </button>{" "}</Link>
    </div>
    
  );
};

export default AppCards;
