"use client";

import DepositCardIcon from "@/components/icons/DepositCardIcon";
import DollorIcon from "@/components/icons/DollorIcon";
import MasterCardShadowIcon from "@/components/icons/MasterCardShadowIcon";
import MasterCardShadowWhiteIcon from "@/components/icons/MasterCardShadowWhiteIcon";
import PaypalIcon from "@/components/icons/PaypalIcon";
import SendPlaneIcon from "@/components/icons/SendPlaneIcon";
import Link from "next/link";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";

const weeklyActivityData = [
  { name: "Sat", Withdraw: 400, Deposit: 240 },
  { name: "Sun", Withdraw: 300, Deposit: 139 },
  { name: "Mon", Withdraw: 200, Deposit: 480 },
  { name: "Tue", Withdraw: 278, Deposit: 390 },
  { name: "Wed", Withdraw: 189, Deposit: 480 },
  { name: "Thu", Withdraw: 239, Deposit: 380 },
  { name: "Fri", Withdraw: 349, Deposit: 430 },
];

const expenseStatisticsData = [
  { name: "Investment", value: 540 },
  { name: "Entertainment", value: 540 },
  { name: "Bill Expense", value: 620 },
  { name: "Other", value: 210 },
];

const balanceHistoryData = [
  {
    name: "Jul",
    balance: 150,
  },
  {
    name: "Aug",
    balance: 350,
  },
  {
    name: "Sep",
    balance: 130,
  },
  {
    name: "Oct",
    balance: 800,
  },
  {
    name: "Nov",
    balance: 200,
  },
  {
    name: "Dec",
    balance: 590,
  },
  {
    name: "Jan",
    balance: 210,
  },
  {
    name: "Feb",
    balance: 790,
  },
];

const RADIAN = Math.PI / 180;
const COLORS = ["#FC7900", "#343C6A", "#396AFF", "#232323"];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function HomePage() {
  return (
    <>
      <div>
        <div className="sm:flex gap-[30px] overflow-x-scroll md:overflow-hidden pr-[24px]">
          <div className="">
            <div className="flex items-center sm:justify-between space-x-4">
              <h2 className="w-[300px] font-[600] text-[22px] leading-[26.63px] text-[#343C6A]">
                My Cards
              </h2>
              <Link
                href="#"
                className="font-[600] text-[17px] leading-[20.57px] text-[#343C6A] hover:text-[#5d6cbe]"
              >
                See All
              </Link>
            </div>
            <div className="flex gap-[30px] pb-[36px] overflow-x-scroll md:overflow-hidden">
              <div className="mt-[20px]">
                <div className="m-auto w-[400px] h-[230px] rounded-xl bg-gradient-to-r from-[#5B5A6F] to-[#000000] text-white shadow-md transition-transform sm:hover:scale-90">
                  <div className="w-full p-6">
                    <div className="flex justify-between">
                      <div className="">
                        <p className="font-[400] text-[12px] leading-[14.4px] text-[#FFFFFF]">
                          Balance
                        </p>
                        <p className="font-[600] text-[20px] leading-[24px] text-[#FFFFFF]">
                          $5,756
                        </p>
                      </div>
                      <img
                        className="h-14 w-14 object-contain"
                        src="https://s3-alpha-sig.figma.com/img/6f2e/6ae8/177a4ce3a2803414348e09c79e61df4f?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gwsJxtAi3~CqzatJNjVfjPoLSwHcWqmx6zJBwObXw70PQ0LbOANJ~xAloULbBDREzmQEDlSiQZSFp2rYxu77Hc1quVlQVgmdUmKflqckuRXXKyOWdQURVwwq9TTuR2FxnQaPxmaUJS4srHTIWlD4~m9MliW8pto73Vy2-2OEyjCXOEwdE-TVsY6XRTkaVoLbxfD8QhN5ZT5xCWJxwCYDYrCV1A1U4ngEBonNia6Npy6-ZWnShLS9rWD29HV4-xmcUxyjjru5yO1SjVj4jyYwmDKkjvcZMmAFN3thFDKEgvi5GYHchMmFDxEGwiUqxUZ07cWfmirmk~U28lPB6DVGng__"
                      />
                    </div>

                    <div className="pt-5 pr-6">
                      <div className="w-[80%] flex justify-between">
                        <div className="">
                          <p className="font-[400] text-[12px] leading-[14.4px] text-[#FFFFFF]">
                            CARD HOLDER
                          </p>
                          <p className="font-[600] text-[15px] leading-[18px] text-[#FFFFFF]">
                            Eddy Cusuma
                          </p>
                        </div>
                        <div className="">
                          <p className="font-[400] text-[12px] leading-[14.4px] text-[#FFFFFF]">
                            VALID THRU
                          </p>
                          <p className="font-[600] text-[15px] leading-[18px] text-[#FFFFFF]">
                            12/22
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center px-6 border-t border-[#] mt-1 pt-1">
                    <p className="font-[600] text-[22px] leading-[26.4px] text-[#FFFFFF]">
                      3778 **** **** 1234
                    </p>
                    <MasterCardShadowIcon className="h-14 w-14 object-contain" />
                  </div>
                </div>
              </div>

              <div className="mt-[20px]">
                <div className="m-auto w-[400px] h-[230px] rounded-xl bg-[#FFFFFF] shadow-md transition-transform sm:hover:scale-90">
                  <div className="w-full p-6">
                    <div className="flex justify-between">
                      <div className="">
                        <p className="font-[400] text-[12px] leading-[14.4px] text-[#718EBF]">
                          Balance
                        </p>
                        <p className="font-[600] text-[20px] leading-[24px] text-[#343C6A]">
                          $5,756
                        </p>
                      </div>

                      <img
                        alt="chip"
                        src="/chip_card_black.png"
                        className="h-14 w-14 object-contain"
                      />
                    </div>

                    <div className="pt-5 pr-6">
                      <div className="w-[80%] flex justify-between">
                        <div className="">
                          <p className="font-[400] text-[12px] leading-[14.4px] text-[#718EBF]">
                            CARD HOLDER
                          </p>
                          <p className="font-[600] text-[15px] leading-[18px] text-[#343C6A]">
                            Eddy Cusuma
                          </p>
                        </div>
                        <div className="">
                          <p className="font-[400] text-[12px] leading-[14.4px] text-[#718EBF]">
                            VALID THRU
                          </p>
                          <p className="font-[600] text-[15px] leading-[18px] text-[#343C6A]">
                            12/22
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center px-6 border-t border-[#] mt-1 pt-1">
                    <p className="font-[600] text-[22px] leading-[26.4px] text-[#343C6A]">
                      3778 **** **** 1234
                    </p>
                    <MasterCardShadowWhiteIcon className="h-14 w-14 object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:mt-[0px] mt-[24px]">
            <div className="flex items-center justify-between space-x-4">
              <h2 className="font-[600] text-[22px] leading-[26.63px] text-[#343C6A]">
                Recent Transaction
              </h2>
            </div>
            <div className="flex gap-[30px] pb-[36px] overflow-x-scroll md:overflow-hidden">
              <div className="mt-[20px]">
                <div className="m-auto w-[400px] h-[230px] rounded-xl bg-[#FFFFFF] from-[#5B5A6F] to-[#000000] shadow-md transition-transform sm:hover:scale-90">
                  <div className="w-full flex items-center gap-[17px] pt-[25px] px-6">
                    <div className="flex items-center justify-center bg-[#FFF5D9] rounded-full w-[50px] h-[50px]">
                      <DepositCardIcon className="h-[25px] w-[25px]" />
                    </div>
                    <div>
                      <p className="w-[180px] font-[500] text-[16px] leading-[19.3px] text-[#232323]">
                        Deposit from my Card
                      </p>
                      <p className="font-[400] text-[15px] leading-[18.15px] text-[#718EBF]">
                        28 January 2021
                      </p>
                    </div>
                    <p className="font-[500] text-[16px] leading-[19.36px] text-[#FF4B4A]">
                      -$850
                    </p>
                  </div>

                  <div className="w-full flex items-center gap-[17px] mt-[15px] px-6">
                    <div className="flex items-center justify-center bg-[#E7EDFF] rounded-full w-[50px] h-[50px]">
                      <PaypalIcon className="h-[25px] w-[25px]" />
                    </div>
                    <div>
                      <p className="w-[180px] font-[500] text-[16px] leading-[19.3px] text-[#232323]">
                        Deposit Paypal
                      </p>
                      <p className="font-[400] text-[15px] leading-[18.15px] text-[#718EBF]">
                        25 January 2021
                      </p>
                    </div>
                    <p className="font-[500] text-[16px] leading-[19.36px] text-[#41D4A8]">
                      +$2,500
                    </p>
                  </div>

                  <div className="w-full flex items-center gap-[17px] mt-[15px] px-6">
                    <div className="flex items-center justify-center bg-[#DCFAF8] rounded-full w-[50px] h-[50px]">
                      <DollorIcon className="h-[25px] w-[25px]" />
                    </div>
                    <div>
                      <p className="w-[180px] font-[500] text-[16px] leading-[19.3px] text-[#232323]">
                        Jemi Wilson
                      </p>
                      <p className="font-[400] text-[15px] leading-[18.15px] text-[#718EBF]">
                        21 January 2021
                      </p>
                    </div>
                    <p className="font-[500] text-[16px] leading-[19.36px] text-[#41D4A8]">
                      +$5,400
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:flex gap-[30px] pr-[24px]">
          <div className="sm:mt-[0px] mt-[24px]">
            <h2 className="font-[600] text-[22px] leading-[26.63px] text-[#343C6A]">
              Weekly Activity
            </h2>

            <div className="sm:w-[830px] mt-[20px] rounded-xl bg-[#FFFFFF] shadow">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={weeklyActivityData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis
                    domain={[0, 500]} // Set Y-axis range
                    tickCount={6} // Number of ticks (0, 100, 200, ..., 500)
                  />
                  <Tooltip />
                  <Legend iconType="circle" />{" "}
                  <Bar
                    dataKey="Withdraw"
                    fill="#000000"
                    barSize={20}
                    radius={[10, 10, 10, 10]} // Rounded corners for bars
                  />
                  <Bar
                    dataKey="Deposit"
                    fill="#1E90FF"
                    barSize={20}
                    radius={[10, 10, 10, 10]} // Rounded corners for bars
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="sm:mt-[0px] mt-[24px]">
            <h2 className="font-[600] text-[22px] leading-[26.63px] text-[#343C6A]">
              Expense Statistics
            </h2>

            <div className="mt-[20px] rounded-xl bg-[#FFFFFF] shadow">
              <ResponsiveContainer width={400} height={400}>
                <PieChart>
                  <Pie
                    data={expenseStatisticsData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {expenseStatisticsData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="flex gap-[30px] pr-[24px] sm:mt-[0px] mt-[24px]">
          <div className="">
            <h2 className="font-[600] text-[22px] leading-[26.63px] text-[#343C6A]">
              Quick Transfer
            </h2>

            <div className="w-[445px] mt-[20px] rounded-xl bg-[#FFFFFF] shadow">
              <div className="flex gap-[28px] items-center px-6 py-8">
                <div className="">
                  <img
                    alt="img"
                    src="https://s3-alpha-sig.figma.com/img/a0bd/5a15/758288ff5165913073569be101d5c4fb?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JO0sI4lBcbNUVsmfcEsAocDi8I6t824a6WzR7Nv1JzjjK5Ls6AeaGUuPAZ2t5M7qFOPEWwNXJ5vA2jz7kFQH48Cb3uWjQZmcb5uKdP1w3ZnD4vyo1WVCykWD1EXE1tkpbpjHtPS~0LRmiULJ4ZWHg18xgGif6mT7rJq2GaAedu81YwZko6rVNrsnWCl28HwtTO76pB6e7-8vy8f0jhI2gAApEVnqCkTEg-ppl6Uku5G6Ze0MO7a4QgAwwJivse-Dqh1zfIXTeLxplpnQPB7A-R4xwLITLsFEY34786LgMFdbW9KNuU1AuvMCBEHFiVVTTwmTyffEX0XY8NkzjBNtuw__"
                    className="h-[80px] w-[80px] rounded-full"
                  />

                  <p className="flex justify-center mt-[15px] items-center font-[400] text-[16px] leading-[19.36px] text-[#232323]">
                    Randy Press
                  </p>
                  <p className="flex justify-center mt-[5px] items-center font-[400] text-[15px] leading-[18.15px] text-[#718EBF]">
                    CEO
                  </p>
                </div>
                <div className="">
                  <img
                    alt="img"
                    src="https://s3-alpha-sig.figma.com/img/4596/79f6/c0c1f4c69f7c2368440bfc85e940b511?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NnMWwqMlvgzofvdsgfueBg5HEJBEGMYnplfNmxLhb78BKVlkcDhBZz2OUYtZBrTYOtQpf04vbXEujbEkapjfGAdUIiJuaGeyKTAtxVO2dGwQlpr1ZaSp8j9EdolhAcUH4Y03zNAt8PlAjiUcMH4rEqCzcWbcxmVDXMqvNHBlI6GxFzoE4vpKvL26NVWa8NbNixT-G6j6bGrVwe4hWwWjgpP6G-duQm94aOCDb5cIqnylGY2L9LTNoNuWH5F19kHpyJxjrw~ghlnlB49dGFSiDicSWKfqKUiCHUnB~PDeZA1VmFm9grPb0xYseAvggLZ-mQnSYutZkQ1WZzfw7DoTFg__"
                    className="h-[80px] w-[80px] rounded-full"
                  />

                  <p className="flex justify-center mt-[15px] items-center font-[400] text-[16px] leading-[19.36px] text-[#232323]">
                    Randy Press
                  </p>
                  <p className="flex justify-center  mt-[5px] items-center font-[400] text-[15px] leading-[18.15px] text-[#718EBF]">
                    Director
                  </p>
                </div>
                <div className="">
                  <img
                    alt="img"
                    src="https://s3-alpha-sig.figma.com/img/4ca5/afed/9b9f6f81c5acfb0ab11904a63a50981e?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cMmQKJYCTJRzwbAcdSevzPOyqMCe1fpkbHM~Ah8h~p1SYHUeaAC27T6Xu~B00iO1c3W3TmlHQyHUvYUCnpO34O6yIxsWYk9LDc81t7V-7i3ILeL5n6pVnqUDhlBhcLddZgiHM081sew7I2-HDRKROxR51oopChTmWs-DUSL7Csf-sltKl01n9vp0fc98~ZvVtfXUz3WLX6qC4ovqyfQu7wsCfOr9Rt4X6DjBVrouIhCJIAHnERsWaMGb1UB7fXY~if2pQMNJI2jkMsvOeH5bClWCLDIVMFWmcvSn-QEwtUSIjP-pJiIhZ8h1yhOO7mYfIFuWkLH6RackscUZNyF3tQ__"
                    className="h-[80px] w-[80px] rounded-full "
                  />

                  <p className="flex justify-center  mt-[15px] items-center font-[400] text-[16px] leading-[19.36px] text-[#232323]">
                    Workman
                  </p>
                  <p className="flex justify-center  mt-[5px] items-center font-[400] text-[15px] leading-[18.15px] text-[#718EBF]">
                    Designer
                  </p>
                </div>

                <button
                  type="button"
                  className="bg-[#FFFFFF] hover:bg-[#fbfafa] shadow-sm border font-medium rounded-full text-sm p-3.5 text-center inline-flex items-center"
                >
                  <svg
                    className="w-4 h-4"
                    width="9"
                    height="15"
                    viewBox="0 0 9 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L7.5 7.5L1 14"
                      stroke="#718EBF"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>

              <div className="px-6 pt-6 pb-10">
                <div className="flex justify-center items-center gap-[27px]">
                  <span className="font-[400] text-[16px] leading-[19.36px] text-[#718EBF]">
                    Write Amount
                  </span>

                  <div className="flex items-center gap-[57px] w-[265px] h-[50px] justify-between rounded-full bg-gray-200 pl-[30px]">
                    <span className="font-[400] text-[16px] leading-[19.36px] text-[#718EBF]">
                      525.50
                    </span>
                    <button className="flex items-center bg-black gap-[11px] text-white rounded-full px-4 py-3">
                      <span>Send</span>
                      <SendPlaneIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <h2 className="font-[600] text-[22px] leading-[26.63px] text-[#343C6A]">
              Balance History
            </h2>

            <div className="w-[785px] mt-[20px] rounded-xl bg-[#FFFFFF] shadow py-4">
              <ResponsiveContainer width="100%" height={285}>
                <AreaChart
                  data={balanceHistoryData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 800]} tickCount={6} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="balance"
                    stroke="#1814F3"
                    fill="#2D60FF40"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
