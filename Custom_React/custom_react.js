
function Render(React_Element, container){

    // V1

    // const Element = document.createElement(React_Element.type)

    // Element.setAttribute("href", React_Element.props.href)
    // Element.setAttribute("target", React_Element.props.target)
    // Element.innerHTML = React_Element.children

    // container.appendChild(Element)

    // V2

    const Element = document.createElement(React_Element.type)
    
    Element.innerHTML = React_Element.children

    for (const prop in React_Element.props) {
        
        if(prop === "children") continue;

        Element.setAttribute(prop, React_Element.props[prop])
    }

    container.appendChild(Element)

}

const React_Element = {
    type: "a",
    props: {
        href: "https://www.robotstxt.org/robotstxt.html",
        target: "_blank",
    },
    children: "click Me",
}


const root = document.querySelector("#root")

Render(React_Element, root)
