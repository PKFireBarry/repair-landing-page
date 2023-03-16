import React from "react";
import {
  ComputerDesktopIcon,
  GlobeAmericasIcon,
  UserGroupIcon,
  ShieldExclamationIcon,
  ArchiveBoxXMarkIcon,
} from "@heroicons/react/24/solid";
import bottom from "../Photos/bottom.jpg";
import networking from "../Photos/networking.jpg";
import data from "../Photos/data.jpg";
import phone from "../Photos/phone.jpg";
import iphone from "../Photos/iphone.jpg";
import evaluation from "../Photos/eval.jpg";
import splash from "../Photos/splash.jpg";
import { motion } from "framer-motion";

function Services() {
  return (
    <div className="bg-green-500">
      <div id="services" className="">
        <h2 className="text-3xl font-extrabold pt-12 pb-6 text-gray-900">
          Our Award-Winning Apple Repair Services
        </h2>
        <p className="text-base font-semibold leading-7 p-4">
          Check out the premier services. We repair and recover your Apple
          products including iPhones, iPads, MacBooks and more!
        </p>
      </div>
      <div class="mt-6 grid grid-cols-1 p-20 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 2, stiffness: 15, type: "spring" }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          className="bg-white overflow-hidden shadow rounded-lg"
        >
          <img src={phone} alt="" className="object-cover  resize" />
          <div className="px-4  py-5 sm:p-6">
            <div className="flex flex-col justify-evenly">
              <ShieldExclamationIcon className="w-12 h-12" />
              <h3 className="text-2xl leading-6 font-medium text-gray-900">
                Hardware Repair
              </h3>
            </div>

            <p className="mt-2 max-w-2xl text-sm text-gray-500">
              We offer support from experienced technicians who can answer your
              questions about MacBook boards. When you bring your MacBook in for
              repair, we'll provide a free diagnostic estimate.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 2.1, stiffness: 15, type: "spring" }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white overflow-hidden shadow rounded-lg"
        >
          <img src={bottom} alt="" className="object-cover  resize" />
          <div className="px-4 py-5 sm:p-6">
            <div className="flex flex-col justify-evenly">
              <UserGroupIcon className="w-12 h-12" />
              <h3 className="text-2xl leading-6 font-medium text-gray-900">
                Consulting
              </h3>
            </div>

            <p className="mt-2 max-w-2xl text-sm text-gray-500">
              Interested in learning how we repair a MacBook logic board? Our
              board repair technicians offer personalized trainings where you
              can work with them hands-on and ask questions.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 2.3, stiffness: 15, type: "spring" }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white overflow-hidden shadow rounded-lg"
        >
          <img src={networking} alt="" className="object-cover resize" />
          <div className="px-4 py-5 sm:p-6">
            <div className="flex flex-col justify-evenly">
              <GlobeAmericasIcon className="w-12 h-12" />
              <h3 className="text-2xl leading-6 font-medium text-gray-900 ">
                Logic Board Repair
              </h3>
            </div>
            <p className="mt-2 max-w-2xl text-sm text-gray-500">
              While Apple would make you pay for an entire logic board
              replacement, we offer an affordable solution...we'll complete your
              logic board repair in 2-5 days and give you a flat rate to pay.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 2.5, stiffness: 15, type: "spring" }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white overflow-hidden shadow rounded-lg"
        >
          <img src={data} alt="" className="object-cover resize" />
          <div className="px-4 py-5 sm:p-6">
            <div className="flex flex-col justify-evenly">
              <ArchiveBoxXMarkIcon className="w-12 h-12" />
              <h3 className="text-2xl leading-6 font-medium text-gray-900 ">
                Data Recovery
              </h3>
            </div>

            <p className="mt-2 max-w-2xl text-sm text-gray-500">
              When you bring your iPhone or iPad in for data recovery, we'll
              recover your data at an affordable rate. If we can't recover the
              data, you'll only pay our $25 reassembly fee.{" "}
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 2.5, stiffness: 15, type: "spring" }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white overflow-hidden shadow rounded-lg"
        >
          <img src={splash} alt="" className="object-cover resize" />
          <div className="px-4 py-5 sm:p-6">
            <div className="flex flex-col justify-evenly">
              <ArchiveBoxXMarkIcon className="w-12 h-12" />
              <h3 className="text-2xl leading-6 font-medium text-gray-900 ">
                Liquid Spill Repair
              </h3>
            </div>

            <p className="mt-2 max-w-2xl text-sm text-gray-500">
              When you bring your iPhone or iPad in for data recovery, we'll
              recover your data at an affordable rate. If we can't recover the
              data, you'll only pay our $25 reassembly fee.{" "}
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 2.7, stiffness: 15, type: "spring" }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white overflow-hidden shadow rounded-lg"
        >
          <img src={iphone} alt="" className="object-cover resize" />
          <div className="px-4 py-5 sm:p-6">
            <div className="flex flex-col justify-evenly">
              <ArchiveBoxXMarkIcon className="w-12 h-12" />
              <h3 className="text-2xl leading-6 font-medium text-gray-900 ">
                Iphone Data Recovery
              </h3>
            </div>

            <p className="mt-2 max-w-2xl text-sm text-gray-500">
              When you bring your iPhone or iPad in for data recovery, we'll
              recover your data at an affordable rate. If we can't recover the
              data, you'll only pay our $25 reassembly fee.{" "}
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 2.9, stiffness: 15, type: "spring" }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white overflow-hidden shadow rounded-lg"
        >
          <img src={evaluation} alt="" className="object-cover resize" />
          <div className="px-4 py-5 sm:p-6">
            <div className="flex flex-col justify-evenly">
              <ArchiveBoxXMarkIcon className="w-12 h-12" />
              <h3 className="text-2xl leading-6 font-medium text-gray-900 ">
                Free Evaluation
              </h3>
            </div>

            <p className="mt-2 max-w-2xl text-sm text-gray-500">
              When you bring your iPhone or iPad in for data recovery, we'll
              recover your data at an affordable rate. If we can't recover the
              data, you'll only pay our $25 reassembly fee.{" "}
            </p>
          </div>
        </motion.div>
      </div>
      <div className="my-4 pb-8 m-4">
        <p className="text-base font-semibold leading-7 p-4">
          We do not work on boards or hard drives that have been already worked
          on. If sending in a board that has had prior work, please contact us
          first to see if an exception can be made in your case: same for hard
          drives. If you are a computer repair store, worked on it yourself
          prior to sending it here, destroyed it, and do not contact us in
          advance, we are not fixing it and will make fun of you live on camera.
        </p>
      </div>
    </div>
  );
}

export default Services;
