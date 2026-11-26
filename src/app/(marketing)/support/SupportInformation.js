import { getSupportInfo } from "../../_lib/utility";

export default async function SupportInformation() {
    const data = await getSupportInfo();

    return (
        <div style={{margin: "20px"}}>
            <h1>Support Information</h1>
            <table border="1" cellPadding="20" cellSpacing="2">
                <thead style={{ backgroundColor: "#f2f2f2" }}>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.firstName} {user.lastName}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
