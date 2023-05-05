export default function Product({data}) {
    console.log(data)
    return (
        <>
            <h1>Product</h1>
        </>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3000/api/product`)
    const data = await res.json()
    return {
        props: {
            data: data
        }
    }
}