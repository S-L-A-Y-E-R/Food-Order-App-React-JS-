import { memo, useCallback, useContext, useRef } from "react";
import OrdersContext from "../../strore/order-context";

const MenuItem = (props) => {
    const inputRef = useRef();
    const ctx = useContext(OrdersContext);

    const clickButtonHandler = useCallback(() => {
        ctx.addItem({
            id: props.id,
            title: props.title,
            amount: inputRef.current.value,
            price: props.price
        })
        inputRef.current.value = 1;
    }, [ctx, props.id, props.price, props.title])

    return (
        <div className="flex md:justify-between py-2 flex-wrap justify-center md:flex-nowrap text-center md:text-left gap-3 md:gap-0 ">
            <div className="flex flex-col">
                <h3 className="capitalize font-bold text-lg">{props.title}</h3>
                <p className="opacity-70 italic capitalize">{props.description}</p>
                <div className="text-lg text-red-500">${props.price}</div>
            </div>
            <div>
                <label className="font-bold mr-2" htmlFor={`orderNumber${props.id}`}>Amount</label>
                <input type="number" id={`orderNumber${props.id}`} className="border border-opacity-40 border-black w-7" defaultValue={1} ref={inputRef} min={1} max={5} />
                <button onClick={clickButtonHandler} className="bg-red-800 border w-full border-red-800 text-white hover:bg-white hover:text-red-800 px-5 py-1 block mt-4 rounded-full">+ Add</button>
            </div>
        </div>
    );
};

export default memo(MenuItem);