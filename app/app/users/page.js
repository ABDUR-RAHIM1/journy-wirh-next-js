import Link from "next/link";

export const getUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");

    const data = await res.json()
    if (res.ok) {
        return data;
    } else {
        throw new Error("failed to fatch Data")
    }
}

async function page() {

    const data = await getUsers()

    return (
        <div className="w-8/12 m-auto">
            <div>
                {
                    data.map(d => (
                        <div key={d.id} className="my-6 border-b ">
                            <p>Name : {d.name}</p>
                            <p>Email : {d.email}</p>
                            <Link href={`/users/${d.id}`}>
                                <button className="py-2 px-4 bg-blue-500 my-3 text-white">More</button>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default page