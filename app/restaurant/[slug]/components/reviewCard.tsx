import React from "react";

type ReviewCardType = {
  textArea: string;
  ratingRange?: number;
  firstName: string;
  lastName: string;
};

function ReviewCard(props: ReviewCardType) {
  const { textArea, ratingRange, firstName, lastName } = props;

  return (
    <div className="border-b pb-7 mb-7">
      <div className="flex">
        <div className="w-1/6 flex flex-col items-center">
          <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
            <h2 className="text-white text-2xl">{`${firstName.slice(
              0,
              1
            )} ${lastName.slice(0, 1)}`}</h2>
          </div>
          <p className="text-center">
            {" "}
            {firstName} <p />
            {lastName}
          </p>
        </div>
        <div className="ml-10 w-5/6">
          <div className="flex items-center">
            <div className="mt-5">
              <div className="flex mr-5">calculateTODO</div>
              <p className="text-lg font-light">{textArea}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
