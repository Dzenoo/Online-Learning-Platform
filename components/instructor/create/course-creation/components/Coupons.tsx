"use client";
import Button from "@/components/shared/form/Button";
import Select from "@/components/shared/form/Select";
import { couponData } from "@/data/filterdata.config";
import {
  CouponEnum,
  NewCourseValuesTypes,
} from "@/types/instructor/InstructorContextTypes";
import React, { ChangeEvent, useState } from "react";

type CouponsProps = {
  newCourseValues: NewCourseValuesTypes;
  setnewCourseValues: React.Dispatch<React.SetStateAction<any>>;
};

const Coupons: React.FC<CouponsProps> = ({ setnewCourseValues }) => {
  const [isCouponCreating, setisCouponCreating] = useState(false);
  const [coupon, setCoupon] = useState({
    discountType: CouponEnum.FixedCoupon,
    value: "",
    expiration: "",
    id: Math.random().toString(),
  });

  const isTypeFix = coupon.discountType === CouponEnum.FixedCoupon;
  const isButtonDisabled = coupon.value === "" || coupon.expiration === "";

  function changeHandler(e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) {
    const { id, value } = e.target;
    setCoupon((prevState: any) => ({
      ...prevState,
      [id]: value,
    }));
  }

  function createCoupon() {
    if (coupon.value !== "" || coupon.expiration !== "") {
      setnewCourseValues((prevVal: NewCourseValuesTypes) => ({
        ...prevVal,
        coupon: coupon,
      }));
    }
  }

  return (
    <div className="shadow-lg p-9">
      <div className="flex justify-between items-center gap-2 mb-6">
        <div>
          <h1 className="font-bold text-2xl">Coupons</h1>
          <p className="font-light">
            Create coupons for your course to help students, by reducing price
            of your course
          </p>
        </div>
        <div className="w-60">
          <Button
            additionalStyles="bg-gray-700"
            type="button"
            styleType="initial"
            onClick={() => setisCouponCreating(!isCouponCreating)}
          >
            Add Coupon
          </Button>
        </div>
      </div>
      <div>
        {isCouponCreating && (
          <section className="flex flex-col gap-2">
            <div className="flex gap-4">
              <button
                className={`py-2 font-bold ${
                  coupon.discountType === CouponEnum.PercentageCoupon &&
                  "text-blue-400"
                }`}
                onClick={() =>
                  setCoupon((prevState) => ({
                    ...prevState,
                    discountType: CouponEnum.PercentageCoupon,
                  }))
                }
              >
                Percentage
              </button>
              <button
                className={`py-2 font-bold ${
                  coupon.discountType === CouponEnum.FixedCoupon &&
                  "text-blue-400"
                }`}
                onClick={() =>
                  setCoupon((prevState) => ({
                    ...prevState,
                    discountType: CouponEnum.FixedCoupon,
                  }))
                }
              >
                Fixed Price
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-60">
                {isTypeFix ? (
                  <input
                    type="number"
                    placeholder="Value of coupon"
                    id="value"
                    className="p-4 border rounded-md"
                    max={20}
                    onChange={changeHandler}
                  />
                ) : (
                  <Select
                    options={couponData}
                    onChange={changeHandler}
                    id="value"
                  />
                )}
              </div>
              <div className="w-60">
                <input
                  type="date"
                  placeholder="Enter date of expiration of coupon"
                  onChange={changeHandler}
                  className="p-4 border rounded-md"
                  id="expiration"
                />
              </div>
              <Button
                type="button"
                styleType="initial"
                onClick={createCoupon}
                disabled={isButtonDisabled}
              >
                Create
              </Button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Coupons;
