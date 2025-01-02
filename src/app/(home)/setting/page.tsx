"use client";

import React, { Fragment, useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { classNames } from "@/shared/utils";
import TabPanelTransition from "@/components/TabPanelTransition";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import FormInputField from "@/components/FormInputField";
import PencilIcon from "@/components/icons/PencilIcon";
import ToastContainer from "@/components/ToastContainer";
import toast from "react-hot-toast";

const tabs = [
  { name: "Edit Profile", index: 0 },
  { name: "Preferences", index: 1 },
  { name: "Security", index: 2 },
];
const SettingPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const editProfileSchema = yup.object({
    name: yup.string().required("Name is required"),
    username: yup.string().required("User name is required"),
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
    date_of_birth: yup.string().required("Date of birth is required"),
    present_address: yup.string().required("Present address is required"),
    permanent_address: yup.string().required("Permanent address is required"),
    city: yup.string().required("City is required"),
    postal_code: yup.string().required("Postal code is required"),
    country: yup.string().required("Country is required"),
  });

  const { control, handleSubmit, reset } = useForm({
    mode: "onBlur",
    resolver: yupResolver(editProfileSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      date_of_birth: "",
      present_address: "",
      permanent_address: "",
      city: "",
      postal_code: "",
      country: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("data", data);
    if (data) {
      toast.success("Profile data updated successfully");
      reset();
    }
    // alert(
    //   "Name: " +
    //     data.name +
    //     " User Name: " +
    //     data.username +
    //     " etc fields were added successfully."
    // );
  };

  return (
    <>
      <div className="bg-white rounded-[25px] p-[30px]">
        <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <div className="w-full h-[50px] border-b border-gray-200">
            <TabList
              className="flex sm:space-x-8 space-x-[-20px]"
              aria-label="Tabs"
            >
              {tabs.map((tab: any) => (
                <Tab as={Fragment} key={tab.name}>
                  {({ selected }) => (
                    <span
                      key={tab.name}
                      className={classNames(
                        selected
                          ? "border-[#232323] text-[#232323] font-[700]"
                          : "border-transparent text-[#718EBF] font-[500]",
                        "flex border-b-4 pt-3 sm:px-10 px-[28px] pb-3 cursor-pointer text-[16px] text-center leading-[20px]"
                      )}
                    >
                      {tab.name}
                    </span>
                  )}
                </Tab>
              ))}
            </TabList>
          </div>

          <TabPanels className="h-[98%] mt-[24px]">
            <TabPanel className="h-full">
              <TabPanelTransition>
                <div>
                  <div className="sm:flex sm:gap-[57px]">
                    <div className="">
                      <div className="flex justify-center items-center">
                        <div className="relative">
                          <img
                            className="w-[98px] h-[98px] rounded-full mt-[22px] sm:mt-[0px]"
                            src="https://s3-alpha-sig.figma.com/img/57d3/d250/790e98129931897251abd3915a931233?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RK-a81-hCMGTpug0VYsNXtLWQfTk38o1Nhj2FiCFyZw~Bo~fWbmMLs4vIvwb4VIOe3xjWW2~v7kx4XDmrXHcMc~dIPAa5FWnX4vQwZvuAygn1hHMIbXR6Yeho-XkRjP8w5tQt~uFqAxOlFMNKJ5G3IWDniIuqEGAfPHNSW2noK1E6zunHRsG~KknQUE4RIa0Uqp1Tf2p05Qu7uqAP~il3qr9XrmWAMxvtzUvZF1AatjV3X-yptDS422qlwDOtaiR-zuS8H5X3i-8tsXGAr1h9hzo~LsrHuDKyiBqW2LLHP9qs~hnMBCv11TAfxijPSe26jHhVCD53m4bwH0VNbGdaw__"
                            alt="img"
                          />
                          <div className="flex justify-center items-center bottom-0 left-[70px] absolute  w-[30px] h-[30px] bg-[#232323] border-2 border-white dark:border-gray-800 rounded-full cursor-pointer">
                            <PencilIcon className="w-[15px] h-[15px]" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="sm:px-8 mt-[22px] sm:mt-[0px]">
                      <div className="">
                        <div>
                          <div className="">
                            <div className="sm:flex gap-[30px] grid grid-cols-1 mt-4">
                              <div>
                                <Controller
                                  control={control}
                                  render={({
                                    field: { onChange, onBlur, value },
                                    fieldState: { error },
                                  }) => (
                                    <FormInputField
                                      type={"text"}
                                      label={"Your Name"}
                                      name={"name"}
                                      value={value}
                                      placeholder="Charlene Reed"
                                      onChange={onChange}
                                      onBlur={onBlur}
                                      className="sm:w-[418px] w-full"
                                      required={true}
                                      error={error}
                                    />
                                  )}
                                  name="name"
                                />
                              </div>

                              <div>
                                <Controller
                                  control={control}
                                  render={({
                                    field: { onChange, onBlur, value },
                                    fieldState: { error },
                                  }) => (
                                    <FormInputField
                                      type={"text"}
                                      label={"User Name"}
                                      name={"name"}
                                      value={value}
                                      placeholder="Charlene Reed"
                                      onChange={onChange}
                                      onBlur={onBlur}
                                      className="sm:w-[418px] w-full"
                                      required={true}
                                      error={error}
                                    />
                                  )}
                                  name="username"
                                />
                              </div>
                            </div>

                            <div className="mt-[24px] sm:flex gap-[30px] grid grid-cols-1">
                              <div>
                                <Controller
                                  control={control}
                                  render={({
                                    field: { onChange, onBlur, value },
                                    fieldState: { error },
                                  }) => (
                                    <FormInputField
                                      type={"email"}
                                      label={"Email"}
                                      name={"email"}
                                      value={value}
                                      placeholder="charlenereed@gmail.com"
                                      onChange={onChange}
                                      onBlur={onBlur}
                                      className="sm:w-[418px] w-full"
                                      required={true}
                                      error={error}
                                    />
                                  )}
                                  name="email"
                                />
                              </div>

                              <div>
                                <Controller
                                  control={control}
                                  render={({
                                    field: { onChange, onBlur, value },
                                    fieldState: { error },
                                  }) => (
                                    <FormInputField
                                      type={"password"}
                                      label={"Password"}
                                      name={"password"}
                                      value={value}
                                      placeholder="**********"
                                      onChange={onChange}
                                      onBlur={onBlur}
                                      className="sm:w-[418px] w-full"
                                      required={true}
                                      error={error}
                                    />
                                  )}
                                  name="password"
                                />
                              </div>
                            </div>

                            <div className="mt-[24px] sm:flex gap-[30px] grid grid-cols-1">
                              <div>
                                <Controller
                                  control={control}
                                  render={({
                                    field: { onChange, onBlur, value },
                                    fieldState: { error },
                                  }) => (
                                    <FormInputField
                                      type={"text"}
                                      label={"Date of Birth"}
                                      name={"date_of_birth"}
                                      value={value}
                                      placeholder="25 January 1990"
                                      onChange={onChange}
                                      onBlur={onBlur}
                                      className="sm:w-[418px] w-full"
                                      required={true}
                                      error={error}
                                    />
                                  )}
                                  name="date_of_birth"
                                />
                              </div>

                              <div>
                                <Controller
                                  control={control}
                                  render={({
                                    field: { onChange, onBlur, value },
                                    fieldState: { error },
                                  }) => (
                                    <FormInputField
                                      type={"text"}
                                      label={"Present Address"}
                                      name={"present_address"}
                                      value={value}
                                      placeholder="San Jose, California, USA"
                                      onChange={onChange}
                                      onBlur={onBlur}
                                      className="sm:w-[418px] w-full"
                                      required={true}
                                      error={error}
                                    />
                                  )}
                                  name="present_address"
                                />
                              </div>
                            </div>

                            <div className="mt-[24px] sm:flex gap-[30px] grid grid-cols-1">
                              <div>
                                <Controller
                                  control={control}
                                  render={({
                                    field: { onChange, onBlur, value },
                                    fieldState: { error },
                                  }) => (
                                    <FormInputField
                                      type={"text"}
                                      label={"Permanent Address"}
                                      name={"permanent_address"}
                                      value={value}
                                      placeholder="San Jose, California, USA"
                                      onChange={onChange}
                                      onBlur={onBlur}
                                      className="sm:w-[418px] w-full"
                                      required={true}
                                      error={error}
                                    />
                                  )}
                                  name="permanent_address"
                                />
                              </div>

                              <div>
                                <Controller
                                  control={control}
                                  render={({
                                    field: { onChange, onBlur, value },
                                    fieldState: { error },
                                  }) => (
                                    <FormInputField
                                      type={"text"}
                                      label={"City"}
                                      name={"city"}
                                      value={value}
                                      placeholder="San Jose"
                                      onChange={onChange}
                                      onBlur={onBlur}
                                      className="sm:w-[418px] w-full"
                                      required={true}
                                      error={error}
                                    />
                                  )}
                                  name="city"
                                />
                              </div>
                            </div>

                            <div className="mt-[24px] sm:flex gap-[30px] grid grid-cols-1">
                              <div>
                                <Controller
                                  control={control}
                                  render={({
                                    field: { onChange, onBlur, value },
                                    fieldState: { error },
                                  }) => (
                                    <FormInputField
                                      type={"text"}
                                      label={"Postal Code"}
                                      name={"postal_code"}
                                      value={value}
                                      placeholder="45962"
                                      onChange={onChange}
                                      onBlur={onBlur}
                                      className="sm:w-[418px] w-full"
                                      required={true}
                                      error={error}
                                    />
                                  )}
                                  name="postal_code"
                                />
                              </div>

                              <div>
                                <Controller
                                  control={control}
                                  render={({
                                    field: { onChange, onBlur, value },
                                    fieldState: { error },
                                  }) => (
                                    <FormInputField
                                      type={"text"}
                                      label={"Country"}
                                      name={"country"}
                                      value={value}
                                      placeholder="USA"
                                      onChange={onChange}
                                      onBlur={onBlur}
                                      className="sm:w-[418px] w-full"
                                      required={true}
                                      error={error}
                                    />
                                  )}
                                  name="country"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-[41px] flex justify-end sm:px-[325px]">
                    <button
                      type="button"
                      onClick={handleSubmit(onSubmit)}
                      className="text-[18px] font-[500] leading-[21.78px] text-white bg-[#232323] rounded-[15px] border border-gray-200 sm:w-[190px] w-full h-[50px]"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </TabPanelTransition>
            </TabPanel>

            <TabPanel className="h-full">
              {" "}
              <TabPanelTransition>Tab 2</TabPanelTransition>
            </TabPanel>
            <TabPanel className="h-full">
              {" "}
              <TabPanelTransition>Tab 3</TabPanelTransition>
            </TabPanel>
          </TabPanels>
        </TabGroup>
        <ToastContainer />
      </div>
    </>
  );
};

export default SettingPage;
