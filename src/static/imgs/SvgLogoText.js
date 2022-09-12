import * as React from "react"

const SvgLogoText = (props) => {

    // const selected_main = useSelector(
    //     (state) => state.dbobjects.mainElement_selected
    // );
    // const mainElements = useSelector(
    //     (state) => state.dbobjects.mainElements
    // );

    //TO get selected mainElement
    // let mainElement = mainElements.filter((el) => {
    //     return (el.id === selected_main)
    // });


    return (
        <>
            <svg
                width={props.width}
                height={props.height}

                viewBox="0 0 462 209"
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 2,
                    marginTop: "6px",
                }}
                {...props}
            >

                <text x="0" y="200" className="fs-1" data-i18n-key="slogen"
                    style={{
                        letterSpacing: 7,
                        fill: "var(--aims-clr-light)",
                        fillRule: "nonzero"
                    }}>Forschung</text>

                <path
                    d="M.516 0h.143L.418-.66H.253L.012 0h.141l.054-.161h.255L.516 0ZM.242-.263l.063-.188.028-.098h.002l.03.1.063.186H.242Z"
                    style={{
                        fill: "var(--aims-clr-light)",
                        fillRule: "nonzero",
                    }}
                    transform="matrix(200.0006 0 0 200.0006 -2.397 133.998)"
                />
                <path
                    style={{
                        fill: "var(--aims-clr-light)",
                        fillRule: "nonzero",
                    }}
                    d="M.086-.66h.138V0H.086z"
                    transform="matrix(200.0006 0 0 200.0006 121.803 133.998)"
                />
                <path
                    d="M.804-.66H.61l-.118.361-.043.148H.447L.405-.3.286-.66h-.2V0h.125v-.344L.204-.537h.002L.388 0h.113l.183-.537h.002L.68-.344V0h.124v-.66Z"
                    style={{
                        fill: "var(--aims-clr-light)",
                        fillRule: "nonzero",
                    }}
                    transform="matrix(200.0006 0 0 200.0006 173.804 133.998)"
                />
                <path
                    d="M.327-.67c-.171 0-.27.091-.27.208 0 .11.07.166.254.203.109.022.144.043.144.079 0 .05-.046.077-.131.077-.089 0-.152-.022-.204-.108l-.082.098c.056.08.141.123.291.123C.487.01.6-.064.6-.188c0-.11-.067-.165-.245-.198C.239-.407.203-.431.203-.475c0-.047.042-.082.125-.082.089 0 .144.036.178.107l.095-.093C.534-.631.45-.67.327-.67Z"
                    style={{
                        fill: "var(--aims-clr-light)",
                        fillRule: "nonzero",
                    }}
                    transform="matrix(200.0006 0 0 200.0006 341.804 133.998)"
                />
            </svg>
        </>
    )

}

export default SvgLogoText


