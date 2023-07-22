import Input from "@/components/shared/form/Input";
import Select from "@/components/shared/form/Select";
import { skillLevelFilters } from "@/data/filterdata.config";
import { InputType } from "@/types/form/InputTypes";
import { NewCourseValuesTypes } from "@/types/instructor/InstructorContextTypes";
import Image from "next/image";
import React, { ChangeEvent } from "react";

type BasicInfoProps = {
  newCourseValues: NewCourseValuesTypes;
  setnewCourseValues: React.Dispatch<React.SetStateAction<any>>;
};

const BasicInfo: React.FC<BasicInfoProps> = ({
  newCourseValues,
  setnewCourseValues,
}) => {
  function imageCourseHandler(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files![0];

    if (file) {
      if (!file.type.startsWith("image/")) {
        console.log("Please upload image");
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result as string;
        setnewCourseValues((prevState: NewCourseValuesTypes) => ({
          ...prevState,
          image: imageUrl,
        }));
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="shadow-lg p-9">
      <div className="flex flex-col gap-2 mb-6">
        <h1 className="font-bold text-2xl">Basic info</h1>
        <p className="font-light">
          Provide the fundamental details about your course. Briefly describe
          the course's main topic, target audience, and key objectives.
          Additionally, outline the expected time commitment for learners and
          highlight any prerequisites or prior knowledge required.
        </p>
      </div>
      <div className="flex flex-col gap-7">
        <div>
          <Input
            type={InputType.Input}
            placeholder={"Learn JavaScript"}
            id={"title"}
            label="Title"
            defaultValue={newCourseValues.title}
            onChange={(e) =>
              setnewCourseValues((prevState: NewCourseValuesTypes) => ({
                ...prevState,
                title: e.target.value,
              }))
            }
          />
        </div>
        <div>
          <Input
            type={InputType.Input}
            placeholder={"Subtitle..."}
            id={"subtitle"}
            label="Subtitle"
            onChange={(e) =>
              setnewCourseValues((prevState: NewCourseValuesTypes) => ({
                ...prevState,
                subtitle: e.target.value,
              }))
            }
          />
        </div>
        <div>
          <Input
            type={InputType.Textarea}
            placeholder={"Add course description..."}
            id={"description"}
            label="Description"
            onChange={(e) =>
              setnewCourseValues((prevState: NewCourseValuesTypes) => ({
                ...prevState,
                description: e.target.value,
              }))
            }
          />
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="w-full">
            <h2 className="font-bold">Language</h2>
            <input
              className="w-full border py-4 rounded-md"
              type="text"
              disabled
              defaultValue={newCourseValues.language}
            />
          </div>
          <div>
            <h2 className="font-bold">Level</h2>
            <Select
              id="advanced"
              options={skillLevelFilters}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setnewCourseValues((prevState: NewCourseValuesTypes) => ({
                  ...prevState,
                  level: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <div>
          <strong>Image</strong>
          <div className="flex items-center gap-4">
            <Image
              src={
                newCourseValues.image
                  ? newCourseValues.image
                  : "/assets/graphics/initial.png"
              }
              width={200}
              height={200}
              alt="initial"
              className="border p-2"
            />
            <input
              className="border p-4"
              type="file"
              accept="image/*"
              onChange={imageCourseHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
