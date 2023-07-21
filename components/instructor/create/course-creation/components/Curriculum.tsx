"use client";

import Button from "@/components/shared/form/Button";
import Input from "@/components/shared/form/Input";
import { useValidation } from "@/hooks/useValidation";
import { InputType } from "@/types/form/InputTypes";
import { VALIDATOR_REQUIRE } from "@/utility/validators";
import React, { useState } from "react";

type SectionProps = {
  title: string;
  id: string;
  index: number;
};

type LectureProps = {
  id: string;
  title: string;
};

const Section: React.FC<SectionProps> = ({ title, id, index }) => {
  const [lectures, setLectures] = useState<any>([]);
  const [isItemCreating, setIsItemCreating] = useState<boolean | null>(false);
  const newLectureInput = useValidation([VALIDATOR_REQUIRE()]);

  function createLecture(): void {
    const newLecture = {
      id: Math.random().toString(),
      title: newLectureInput.value,
    };

    if (newLectureInput.isValid && newLectureInput.value !== "") {
      setLectures((prevState: {}[]) => [...prevState, newLecture]);
      setIsItemCreating(false);
      newLectureInput.emptyInput();
    }
  }

  return (
    <div id={id} className="shadow-md p-4 mt-4 flex flex-col gap-2 border">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl">
          Section {index}: {title}
        </h1>
        <p>{lectures.length} lectures</p>
        <div className="w-60">
          <Button
            additionalStyles="bg-gray-700"
            type="button"
            styleType="initial"
            onClick={() => setIsItemCreating(!isItemCreating)}
          >
            Add Curriculum item
          </Button>
        </div>
      </div>
      {isItemCreating && (
        <div className="border p-2">
          <Input
            type={InputType.Input}
            label="Lecture name"
            placeholder="Introduction..."
            onChange={newLectureInput.onChangeHandler}
            onBlur={newLectureInput.onBlurHandler}
            helperText="Please enter valid input"
            error={!newLectureInput.isValid && newLectureInput.isTouched}
            id={"lecture_name"}
          />
          <Button
            styleType="initial"
            additionalStyles="bg-gray-700 mt-4"
            type={"button"}
            onClick={createLecture}
          >
            Add lecture
          </Button>
        </div>
      )}
      <div>
        {lectures?.map((lecture: LectureProps, i: number) => (
          <div key={lecture.id} id={lecture.id} className="border m-4 p-4">
            <h1 className="font-light text-md">
              Lecture {i + 1}: {lecture.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

const Curriculum: React.FC = () => {
  const [sections, setsections] = useState<{ sectionsContainer: [] }>({
    sectionsContainer: [],
  });
  const [isSectionAdding, setisSectionAdding] = useState<boolean | null>(false);
  const newSectionInput = useValidation([VALIDATOR_REQUIRE()]);

  function createSection(): void {
    const newSection = {
      id: Math.random(),
      title: newSectionInput.value,
    };

    if (newSectionInput.isValid && newSectionInput.value !== "") {
      setsections((prevState: any) => ({
        ...prevState,
        sectionsContainer: [...prevState.sectionsContainer, newSection],
      }));
      setisSectionAdding(false);
      newSectionInput.emptyInput();
    }
  }

  return (
    <div className="shadow-lg p-9">
      <div className="flex flex-col gap-2 mb-6">
        <h1 className="font-bold text-2xl">Curriculum</h1>
        <p className="font-light">
          To get started, please fill out the required fields in the form. The
          information you provide will be used to design a structured and
          effective curriculum that aligns with our educational goals.
        </p>
      </div>
      <div>
        <div className="w-40">
          <Button
            type="button"
            styleType="initial"
            additionalStyles="bg-gray-700"
            onClick={() => setisSectionAdding(!isSectionAdding)}
          >
            Add Section
          </Button>
        </div>
        {isSectionAdding && (
          <div className="border border-gray-700 rounded-md shadow-sm p-4 m-4">
            <h2 className="font-bold text-2xl my-2 text-purple-600">
              New Section
            </h2>
            <Input
              type={InputType.Input}
              label="Enter Section name"
              placeholder="Introduction..."
              onChange={newSectionInput.onChangeHandler}
              onBlur={newSectionInput.onBlurHandler}
              helperText="Please enter valid input"
              error={!newSectionInput.isValid && newSectionInput.isTouched}
              id={"section_name"}
            />
            <Button
              additionalStyles="mt-4"
              styleType="initial"
              type={"button"}
              onClick={createSection}
            >
              Add section
            </Button>
          </div>
        )}
      </div>
      <div>
        {sections?.sectionsContainer.map((section: SectionProps, i: number) => (
          <Section
            id={section.id}
            title={section.title}
            key={section.id}
            index={i + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Curriculum;
