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

    if (newLectureInput.isValid) {
      setLectures((prevState: {}[]) => [...prevState, newLecture]);
    }
  }

  return (
    <div id={id}>
      <h1>
        Section {index}: {title}
      </h1>
      <div>
        <button onClick={() => setIsItemCreating(!isItemCreating)}>
          Add Curriculum item
        </button>
        {isItemCreating && (
          <div>
            <Input
              type={InputType.Input}
              label="Lecture name"
              placeholder="Introduction..."
              onChange={newLectureInput.onChangeHandler}
              onBlur={newLectureInput.onBlurHandler}
              value={newLectureInput.value}
              helperText="Please enter valid input"
              error={!newLectureInput.isValid || newLectureInput.isTouched}
              id={"lecture_name"}
            />
            <Button styleType="initial" type={"button"} onClick={createLecture}>
              Add lecture
            </Button>
          </div>
        )}
      </div>
      <div>
        {lectures?.map((lecture: LectureProps, i: number) => (
          <div key={lecture.id} id={lecture.id}>
            <h1>
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

    if (!newSectionInput.isValid) {
      setsections((prevState: any) => ({
        ...prevState,
        sectionsContainer: [...prevState.sectionsContainer, newSection],
      }));
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
        <Button
          type="button"
          styleType="initial"
          onClick={() => setisSectionAdding(!isSectionAdding)}
        >
          Add Section
        </Button>
        {isSectionAdding && (
          <div className="bg-red-200">
            <h2>New Section</h2>
            <Input
              type={InputType.Input}
              label="Enter Section name"
              placeholder="Introduction..."
              onChange={newSectionInput.onChangeHandler}
              onBlur={newSectionInput.onBlurHandler}
              value={newSectionInput.value}
              helperText="Please enter valid input"
              error={!newSectionInput.isValid || newSectionInput.isTouched}
              id={"section_name"}
            />
            <Button styleType="initial" type={"button"} onClick={createSection}>
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
