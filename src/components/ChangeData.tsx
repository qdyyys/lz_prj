import { MdOutlineChangeCircle } from "react-icons/md";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useEffect, useState, ChangeEvent } from "react";
import { IoMdArrowDropdownCircle } from "react-icons/io";

interface CoinInfo {
  Name: string;
}

interface RawData {
  PRICE: number;
}

interface CoinData {
  CoinInfo: CoinInfo;
  RAW: {
    USD: RawData;
  };
}

const ChangeData: React.FC = () => {
  const [coinItems, setCoinItems] = useState<CoinData[]>([]);
  const [coinName, setCoinName] = useState<string>("BTC");
  const [receiveName, setReceiveName] = useState<string>("ETH");
  const [res, setRes] = useState<CoinData[]>([]);
  const [send, setSend] = useState<number | null>(null);
  const [receive, setReceive] = useState<number | null>(null);
  const [sendClasses, setSendClasses] = useState<string[]>([
    "absolute",
    "top-full",
    "left-0",
    "border-customBlue",
    "border",
    "text-white",
    "w-full",
    "bg-customBlue/30",
    "transition-all",
    "h-0",
    "overflow-hidden",
    "opacity-0",
    "font-bold",
  ]);
  const [sendIsShow, setSendIsShow] = useState<boolean>(true);
  const [receiveClasses, setReceiveClasses] = useState<string[]>([
    "absolute",
    "top-full",
    "left-0",
    "border-customBlue",
    "border",
    "text-white",
    "w-full",
    "bg-customBlue/20",
    "transition-all",
    "h-0",
    "overflow-hidden",
    "opacity-0",
    "font-bold",
  ]);
  const [receiveIsShow, setReceiveIsShow] = useState<boolean>(true);
  const [reverse, setReverse] = useState<boolean>(true);

  const symbols = /[A-Za-zA-Яа-яЁё]/g;

  useEffect(() => {
    fetch(
      "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD"
    )
      .then((res) => res.json())
      .then((data) => {
        const result = data.Data;
        setRes(result);
        setCoinItems(result);
      });
  }, []);

  const handleSend = (event: ChangeEvent<HTMLInputElement>) => {
    const sendValue = Number(event.target.value.replace(symbols, ""));
    setSend(sendValue);

    let sendV = 0;
    let receiveV = 0;

    res.forEach((element) => {
      if (element.CoinInfo.Name === coinName) {
        sendV = element.RAW.USD.PRICE;
      }
      if (element.CoinInfo.Name === receiveName) {
        receiveV = element.RAW.USD.PRICE;
      }
    });

    const total =
      Math.round(((sendValue * sendV) / receiveV) * 1000000) / 1000000;
    setReceive(total);
  };

  const handleReceive = (event: ChangeEvent<HTMLInputElement>) => {
    const receiveValue = Number(event.target.value.replace(symbols, ""));
    setReceive(receiveValue);

    let sendV = 0;
    let receiveV = 0;

    res.forEach((element) => {
      if (element.CoinInfo.Name === receiveName) {
        receiveV = element.RAW.USD.PRICE;
      }
      if (element.CoinInfo.Name === coinName) {
        sendV = element.RAW.USD.PRICE;
      }
    });

    const total =
      Math.round(((receiveValue * receiveV) / sendV) * 1000000) / 1000000;
    setSend(total);
  };

  const handleSendList = () => {
    setSendIsShow(!sendIsShow);
    setSendClasses(
      !sendIsShow
        ? [
            "absolute",
            "top-full",
            "left-0",
            "border-customBlue",
            "border",
            "text-white",
            "w-full",
            "bg-customBlue/20",
            "transition-all",
            "select_coin",
            "font-bold",
          ]
        : [
            "absolute",
            "top-full",
            "left-0",
            "border-customBlue",
            "border",
            "text-white",
            "w-full",
            "bg-customBlue/30",
            "h-0",
            "overflow-hidden",
            "opacity-0",
            "font-bold",
          ]
    );
  };

  const handleReceiveList = () => {
    setReceiveIsShow(!receiveIsShow);
    setReceiveClasses(
      !receiveIsShow
        ? [
            "absolute",
            "top-full",
            "left-0",
            "border-customBlue",
            "border",
            "text-white",
            "w-full",
            "bg-customBlue/30",
            "transition-all",
            "select_coin",
            "font-bold",
          ]
        : [
            "absolute",
            "top-full",
            "left-0",
            "border-customBlue",
            "border",
            "text-white",
            "w-full",
            "bg-customBlue/30",
            "h-0",
            "overflow-hidden",
            "opacity-0",
            "font-bold",
          ]
    );
  };

  const flexReverse = () => {
    setReverse(!reverse);
  };

  const valueCheck = () => {
    if (send === null) {
      console.log(false);
    }
  };

  return (
    <div className="cont_rec w-3/6 max-w-7xl border mx-auto mt-36 border-customBlue/40 rounded-lg min-h-48 px-14 py-14 bg-slate-900/5">
      <div
        className={`sda flex justify-between items-center relative ${
          reverse ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="flex">
          <input
            className="send bg-transparent outline-none border-customBlue/40 border py-3 text-white px-5 hover:border-customBlue transition-all w-full"
            placeholder="00.00"
            value={send ?? ""}
            onChange={handleSend}
          />
          <div
            className="change_send border-customBlue/40 border py-3 text-white px-5 hover:border-customBlue transition-all flex items-center cursor-pointer relative"
            onClick={handleSendList}
          >
            <div className="font-bold">{coinName}</div>
            <IoMdArrowDropdownCircle className="ml-5 text-xl" />
            <div className={sendClasses.join(" ")}>
              <ul className="max-h-40 overflow-auto">
                {coinItems.map((item, idx) => (
                  <li
                    className="hover:bg-customBlue/60 transition-all px-4 py-1 hover:text-customDarkBlue"
                    key={idx}
                    onClick={() => {
                      setCoinName(item.CoinInfo.Name);
                    }}
                  >
                    {item.CoinInfo.Name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <span className="receive text-4xl text-white active:scale-95 transition-all cursor-pointer hover:text-customDarkBlue">
          <MdOutlineChangeCircle onClick={flexReverse} />
        </span>

        <div className="flex">
          <input
            className="recieve bg-transparent outline-none border-customBlue/40 border py-3 text-white px-5 hover:border-customBlue transition-all w-full"
            placeholder="00.00"
            value={receive ?? ""}
            onChange={handleReceive}
          />
          <div
            className="change_receive border-customBlue/40 border py-3 text-white px-5 hover:border-customBlue transition-all flex items-center cursor-pointer relative"
            onClick={handleReceiveList}
          >
            <div className="font-bold">{receiveName}</div>
            <IoMdArrowDropdownCircle className="text-xl ml-5" />
            <div className={receiveClasses.join(" ")}>
              <ul className="max-h-40 overflow-auto flex flex-col-reverse">
                {coinItems.map((item, idx) => (
                  <li
                    className="hover:bg-customBlue/60 transition-all px-4 py-1 hover:text-customDarkBlue"
                    key={idx}
                    onClick={() => {
                      setReceiveName(item.CoinInfo.Name);
                    }}
                  >
                    {item.CoinInfo.Name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-white mb-10">
          <input
            className="w-full mt-5 py-3 px-5 bg-transparent outline-none border-customBlue/40 border rounded-lg  hover:border-customBlue transition-all"
            placeholder={`Your ${receiveName} wallet`}
          />
        </div>
      </div>

      <div className="btns_group flex justify-between items-center">
        <div className="group_info text-white flex gap-10">
          <span className="border-customBlue/40 border px-5 py-2 rounded-lg select-none">
            The average exchange time is{" "}
            <span className="text-customBlue font-bold">3 minutes</span>
          </span>
          <span className="border-customBlue/40 border px-5 py-2 rounded-lg select-none">
            Commission -<span className="text-customBlue font-bold"> 0 %</span>
          </span>
        </div>
        <div className="btn_wrap outline-none bg-customDarkBlue px-5 py-2 rounded-lg active:scale-95 transition-all flex items-center gap-4 cursor-pointer">
          <FaArrowAltCircleRight className="arrow text-xl" />
          <button onClick={valueCheck}>Start exchange</button>
        </div>
      </div>

      <div className="mt-5 text-white">
        By creating an exchange, you agree to the AML policy. We accept
        cryptocurrency up to 80% AML.
        <a href="" className="text-customBlue underline ml-2">
          Need more?
        </a>
      </div>
    </div>
  );
};

export default ChangeData;
