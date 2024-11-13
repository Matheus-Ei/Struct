// Libraries
import { useState } from "react";

interface ItemInterface {
    name: string;
    isChecked: boolean;
    price: number;
}

type ItemsType = Array<ItemInterface>;

const PriceEmulation = () => {
    const [price, setPrice] = useState<number>(0);
    const [items, setItems] = useState<ItemsType>([
        { name: "Colaboração ilimitada", isChecked: false, price: 5.0 },
        { name: "Integração entre modulos", isChecked: false, price: 10.0 },
        { name: "Modulos avançados", isChecked: false, price: 10.0 },
        { name: "Ferramentas", isChecked: false, price: 10.0 },
        { name: "Automações", isChecked: false, price: 5.0 },
    ]);

    const checkItem = (item: ItemInterface) => {
        setItems((prev) => {
            let newPrice = 0.0;

            const newPrev = prev.map((prevItem: ItemInterface) => {
                let newItem: ItemInterface;

                if (prevItem.name === item.name) {
                    newItem = {
                        name: item.name,
                        isChecked: !item.isChecked,
                        price: item.price,
                    };
                } else {
                    newItem = prevItem;
                }

                if (newItem.isChecked === true) {
                    newPrice += newItem.price;
                }

                return newItem;
            });

            setPrice(newPrice);
            return newPrev;
        });
    };

    const renderBenefits = (item: any, index: number) => {
        return (
            <label className="label cursor-pointer gap-5" key={index}>
                <input
                    type="checkbox"
                    onChange={() => {
                        checkItem(item);
                    }}
                    className="checkbox checkbox-primary"
                    checked={item.isChecked}
                />

                <span className="label-text text-xl">{item.name}</span>
            </label>
        );
    };

    return (
        <div className="flex flex-col items-start">
            <h1 className="text-5xl">Simulação de preço</h1>

            <p className="text-2xl">
                Aqui está uma simulação dos nossos preços futuros,
                <br /> porém no inicio será gratuito.
            </p>

            <div className="flex flex-row items-center w-full gap-32">
                <div className="form-control grid grid-cols-3 gap-x-6 justify-items-start justify-center border border-primary rounded-box py-5 px-10">
                    {items.map(renderBenefits)}
                </div>

                <div className="flex flex-col items-center justify-start h-full">
                    <h2 className="text-2xl font-bold">
                        Funcionalidades gratuitas
                    </h2>

                    <ul className="text-xl list-disc list-inside">
                        <li>Modulos básicos</li>
                        <li>Colaboração até 5 usuários</li>
                        <li>Páginas ilimitadas</li>
                    </ul>

                    <p className="text-lg w-full text-center font-bold bg-success text-success-content rounded-btn mt-6">
                        Preço total: {price}R$
                    </p>
                </div>
            </div>

            <p className="text-base-content text-2xl w-full">
                Nós vamos cobrar apenas por oque você selecionar,
                <br /> chega de assinaturas cheias de coisas que você não usa.
            </p>
        </div>
    );
};

export default PriceEmulation;
