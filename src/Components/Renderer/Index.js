import Layout from "../Layout/Index"

function ElementOne(){
    return <div>aaaaaaaaaa</div>
}

function ElementTwo(){
    return <div>bbbbbbbbb</div>
}

function ElementThree(){
    return <div>ccccccccccccc</div>
}
function ElementFour(){
    return <div>dddddddddddddddddd</div>
}

export default function Renderer(){
    return <Layout>
        <ElementOne></ElementOne>
        <ElementTwo></ElementTwo>
        <ElementThree></ElementThree>
        <ElementFour></ElementFour>
    </Layout>
}