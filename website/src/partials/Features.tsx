import React, { useEffect, useRef, useState } from "react";
import Transition from "./utils/Transition";

// @ts-ignore
import featuresBg from "@site/static/img/features-bg.png";
// @ts-ignore
import featuresElement from "@site/static/img/features-element.png";

// @ts-ignore
import ReactLogo from "@site/static/img/reactjs-icon.svg";
// @ts-ignore
import FireCMSLogo from "@site/static/img/firecms_logo.svg";
// @ts-ignore
import FirebaseLogo from "@site/static/img/firebase.svg";
// @ts-ignore
import pricePreview from "@site/static/img/price.png";
// @ts-ignore
import cmsPreview from "@site/static/img/editing.mp4";

import { atomOneLight, CodeBlock, vs2015 } from "react-code-blocks";
import useThemeContext from "@theme/hooks/useThemeContext";

function Features() {

    const { isDarkTheme } = useThemeContext();
    const [tab, setTab] = useState(0);

    const tabsRef = useRef<any>();

    const heightFix = () => {
        if (tabsRef.current && tabsRef.current.children[tab]) {
            // @ts-ignore
            tabsRef.current.style.height = tabsRef.current.children[tab].offsetHeight + "px";
        }
    };
    useEffect(() => {
        heightFix();
    }, [tab]);

    function buildFeature(title: string, text: string, icon: React.ReactNode, thisTab: number) {
        return <div
            className={`flex items-center text-black text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 cursor-pointer ${
                tab !== thisTab
                    ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                    : "bg-gray-200 border-transparent"
            }`}
            onClick={e => {
                e.preventDefault();
                setTab(thisTab);
            }}
        >
            <div>
                <div
                    className="font-bold leading-snug tracking-tight mb-1">
                    {title}
                </div>
                <div className="text-gray-600">
                    {text}
                </div>
            </div>
            <div
                className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                {icon}
            </div>
        </div>;
    }


    const tab0 = (
        <div className={"p-4"}>
            <video className={"rounded-xl shadow-md border-gray-200"}
                   width="100%" loop autoPlay muted>
                <source src={cmsPreview}
                        type="video/mp4"/>
            </video>
        </div>
    );

    const tab1 = (
        <div
            className="relative flex-col font-mono">

            <CodeBlock
                text={`const price = buildProperty({
    title: "Price",
    description: "Price with range validation",
    dataType: "number",
    validation: {
        required: true,
        requiredMessage:
         "You must set a price between 0 and 1000",
        min: 0,
        max: 1000
    }
});
`
                }
                language={"typescript"}
                showLineNumbers={false}
                theme={isDarkTheme ? vs2015 : atomOneLight}
            />

            <div
                className={"p-1 flex justify-center"}>
                <img
                    className=""
                    src={pricePreview}
                    width="500"
                    alt="Element"
                />
            </div>
        </div>
    );

    const tab2 = (
        <div
            className="relative flex-col font-mono">
            <CodeBlock
                text={`const productSchema: EntitySchema = buildSchema({
    name: "Product",
    onPreSave: ({ values }) => {
        values.uppercase = values.name.toUpperCase();
        return values;
    },
    properties: {
        name: {
            dataType: "string",
            title: "Name"
        },
        uppercase: {
            dataType: "string",
            title: "Uppercase Name",
            readOnly: true
        }
    },
    defaultValues: {
        name: "Default name",
    }
});
`
                }
                language={"typescript"}
                showLineNumbers={false}
                theme={isDarkTheme ? vs2015 : atomOneLight}
            />
        </div>
    );

    return (
        <section className="relative">

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-12 md:pt-20">

                    <div className="md:grid md:grid-cols-12 md:gap-6">
                        <div
                            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
                            data-aos="fade-right"
                        >
                            <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                                <h3 className="h3 mb-3">Ready out of the
                                    box</h3>
                                <p className="text-xl text-gray-600">
                                    Map your collections and document schemas to
                                    beautiful tables and forms
                                </p>
                            </div>

                            <div className="mb-8 md:mb-0">


                                {buildFeature("Powerful editing",
                                    `
                    Edit your collections and entities using both a spreadsheet
                    view and powerful forms.
                                `,
                                    arrowIcon, 0)}

                                {buildFeature("Easy schema definition",
                                    `
                    Define your entity schemas and choose from multiple
                    form widgets and validation options.
                                `,
                                    lightningIcon, 1)}

                                {buildFeature("Customization",
                                    `
                    Integrate your own custom form fields as React components,
                    value previews or save callbacks.
                                `,
                                    settingsIcon, 2)}

                            </div>
                        </div>

                        <div
                            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                            data-aos="zoom-y-out"
                            ref={tabsRef}
                        >
                            <div
                                className="relative flex flex-col">

                                <Transition
                                    show={tab === 0}
                                    appear={true}
                                    className="w-full"
                                    enter="transition ease-in-out duration-700 transform order-first"
                                    enterStart="opacity-0 translate-y-16"
                                    enterEnd="opacity-100 translate-y-0"
                                    leave="transition ease-in-out duration-300 transform absolute"
                                    leaveStart="opacity-100 translate-y-0"
                                    leaveEnd="opacity-0 -translate-y-16"
                                >
                                    {tab0}
                                </Transition>

                                <Transition
                                    show={tab === 1}
                                    appear={true}
                                    className="w-full"
                                    enter="transition ease-in-out duration-700 transform order-first"
                                    enterStart="opacity-0 translate-y-16"
                                    enterEnd="opacity-100 translate-y-0"
                                    leave="transition ease-in-out duration-300 transform absolute"
                                    leaveStart="opacity-100 translate-y-0"
                                    leaveEnd="opacity-0 -translate-y-16"
                                >
                                    {tab1}
                                </Transition>

                                <Transition
                                    show={tab === 2}
                                    appear={true}
                                    className="w-full"
                                    enter="transition ease-in-out duration-700 transform order-first"
                                    enterStart="opacity-0 translate-y-16"
                                    enterEnd="opacity-100 translate-y-0"
                                    leave="transition ease-in-out duration-300 transform absolute"
                                    leaveStart="opacity-100 translate-y-0"
                                    leaveEnd="opacity-0 -translate-y-16"
                                >
                                    {tab2}
                                </Transition>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


const lightningIcon = <svg
    className="w-3 h-3 fill-current"
    viewBox="0 0 12 12"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z"/>
</svg>;

const arrowIcon = <svg
    className="w-3 h-3 fill-current"
    viewBox="0 0 12 12"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
        fillRule="nonzero"
    />
</svg>;

const settingsIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                          viewBox="0 0 24 24" width="16px" fill="#000000">
    <g>
        <path d="M0,0h24v24H0V0z" fill="none"/>
        <path
            d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
    </g>
</svg>;

export default Features;
