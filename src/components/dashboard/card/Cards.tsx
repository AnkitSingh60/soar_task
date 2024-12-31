import DepositCardIcon from "@/components/icons/DepositCardIcon";
import MasterCardShadowIcon from "@/components/icons/MasterCardShadowIcon";
import MasterCardShadowWhiteIcon from "@/components/icons/MasterCardShadowWhiteIcon";
import SettingNavIcon from "@/components/icons/SettingNavIcon";

export default function Cards() {
  return (
    <div className="flex gap-[30px] overflow-x-scroll md:overflow-hidden pr-[24px]">
      <div className="">
        <div className="flex items-center sm:justify-between gap-[260px] space-x-4">
          <h2 className="font-[600] text-[22px] leading-[26.63px] text-[#343C6A]">
            My Cards
          </h2>
          <a
            href="#"
            className="font-[600] text-[17px] leading-[20.57px] text-[#343C6A] hover:text-[#5d6cbe]"
          >
            See All
          </a>
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

      <div className="">
        <div className="flex items-center justify-between space-x-4">
          <h2 className="font-[600] text-[22px] leading-[26.63px] text-[#343C6A]">
            Recent Transaction
          </h2>
        </div>
        <div className="flex gap-[30px] pb-[36px] overflow-x-scroll md:overflow-hidden">
          <div className="mt-[20px]">
            <div className="m-auto w-[400px] h-[230px] rounded-xl bg-[#FFFFFF] from-[#5B5A6F] to-[#000000] shadow-md transition-transform sm:hover:scale-90">
              <div className="w-full flex items-center gap-[17px] pt-[15px] px-6">
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
                <div className="flex items-center justify-center bg-[#FFF5D9] rounded-full w-[50px] h-[50px]">
                  <DepositCardIcon className="h-[25px] w-[25px]" />
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
                <div className="flex items-center justify-center bg-[#FFF5D9] rounded-full w-[50px] h-[50px]">
                  <DepositCardIcon className="h-[25px] w-[25px]" />
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
  );
}
