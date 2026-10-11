import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
              Tony Stark
            </td>
            <td className="p-2">001234561S</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-10-01</td>
            <td className="p-2">10:21:32</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
              Stony Tark
            </td>
            <td className="p-2">001526781S</td>
            <td className="p-2">S102</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2022-11-11</td>
            <td className="p-2">11:25:36</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
              Water Bottle
            </td>
            <td className="p-2">011452688S</td>
            <td className="p-2">S301</td>
            <td className="p-2">TA</td>
            <td className="p-2">2040-10-01</td>
            <td className="p-2">01:11:32</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
              Terra Cotta
            </td>
            <td className="p-2">109134961S</td>
            <td className="p-2">S151</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-10-51</td>
            <td className="p-2">80:71:12</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
              Jane Sample
            </td>
            <td className="p-2">001000001S</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2023-01-15</td>
            <td className="p-2">02:15:10</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
              Alex Sample
            </td>
            <td className="p-2">001000002S</td>
            <td className="p-2">S102</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2023-02-20</td>
            <td className="p-2">05:42:08</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
              Sam Sample
            </td>
            <td className="p-2">001000003S</td>
            <td className="p-2">S301</td>
            <td className="p-2">TA</td>
            <td className="p-2">2023-03-05</td>
            <td className="p-2">07:30:55</td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}
