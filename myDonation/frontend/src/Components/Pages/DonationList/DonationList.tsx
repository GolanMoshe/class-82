import { useEffect, useState } from "react";
import DonationModel from "../../../model/DonationModel";
import donationService from "../../../Util/DonationService";
import "./DonationList.css";

function DonationList(): JSX.Element {
    //let donation:DonationModel[] = [];
    const [donation,setData] = useState<DonationModel[]>([]);

    useEffect(()=>{
        donationService.getAllDonations()
        .then(response =>{setData(response)})
        .then(()=>console.log(donation))
        .catch(err=>alert(err.message));
    },[]);

    return (
        <div className="DonationList">
			<h1>Donation List</h1>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>family</th>
                            <th>tel</th>
                            <th>sum</th>
                            <th>payment</th>
                            <th>memo</th>
                            <th>confirmation</th>
                            <th>cancelation</th>
                            <th>edit</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donation.map(item=>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.family}</td>
                                <td>{item.tel}</td>
                                <td>{item.sum}</td>
                                <td>{item.payment}</td>
                                <td>{item.memo}</td>
                                <td>{item.auth_code}</td>
                                <td>{item.cancel_code}</td>
                                <td>
                                    <button>✍🏻</button>
                                </td>
                                <td>
                                    <button onClick={()=>{donationService.deleteDonation(item.id)}}>❌</button>
                                </td>
                            </tr>
                            
                            )}
                    </tbody>
                </table>
        </div>
    );
}

export default DonationList;
