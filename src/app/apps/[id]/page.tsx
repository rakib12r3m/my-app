import { getAllApps } from "@/app/lib/app";
import AppDetailsPageButton from "@/components/shared/AppDetailsPageButton";
import { TApp } from "@/types/apps.type";
import Image from "next/image";
import React from "react";

type TAppDetailsProps = {
  params: {
    id: string;
  };
};

const AppDetailsPage = async ({ params }: TAppDetailsProps) => {
  const { id } = await params;
  const allApps = await getAllApps();
  const app = allApps.find((app: TApp) => app.id === Number(id));
  // console.log(app, "from daynamic rout");

  if (!app) {
    return <div>App not found</div>;
  }

  return (
    
    <div className="mx-auto my-10 max-w-[500px] px-4">
      {" "}
      <div className="card bg-base-100 max-w-[500px] max-h-auto shadow-xl">
        {" "}
        <div className="card-body">
          {" "}
          {/* App Info */}{" "}
          <div className="flex flex-col gap-5 sm:flex-row">
            {" "}
            {/* Logo */}{" "}
            <Image
              src={app.image}
              alt={app.title}
              width={150}
              height={150}
              className="rounded-3xl"
            />{" "}
            {/* Information */}{" "}
            <div>
              {" "}
              <h1 className="text-3xl font-bold">{app.title} </h1>{" "}
              <p className="mt-2 text-primary">{app.companyName} </p>{" "}
              <div className="mt-4 flex flex-wrap gap-2">
                {" "}
                <div className="badge badge-warning">
                  {" "}
                  ⭐{app.ratingAvg}{" "}
                </div>{" "}
                <div className="badge badge-outline"> {app.downloads} Downloads </div>{" "}
                <div className="badge badge-outline">
                  {app.reviews} Reviews{" "}
                </div>{" "}
                <div className="badge badge-outline"> {app.size} GB </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="divider" /> {/* Description */}{" "}
          <div>
            {" "}
            <h2 className="text-2xl font-bold">About This App </h2>{" "}
            <p className="mt-3 leading-7 text-base-content/70 line-clamp-2">{app.description}</p>{" "}
          </div>{" "}
          <div className="divider" /> {/* Rating */}{" "}
          <div>
            {" "}
            <h2 className="text-2xl font-bold"> Ratings & Reviews </h2>{" "}
            <div className="mt-5 flex items-center gap-5">
              {" "}
              <div>
                {" "}
                <p className="text-5xl font-bold">{app.ratingAvg} </p>{" "}
                <p className="mt-2"> ⭐⭐⭐⭐⭐ </p>{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="text-base-content/70"> {app.reviews} Reviews </p>{" "}
                <p className="mt-2"> {app.downloads} Downloads </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          {/* Button */}{" "}
          <AppDetailsPageButton app={app}/>
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default AppDetailsPage;
