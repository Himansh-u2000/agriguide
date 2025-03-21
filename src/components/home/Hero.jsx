import Dropdown from "../common/Dropdown";
import PrimaryButton from "../common/PrimaryButton";
import CropLineChart from "./CropLineChart ";

export default function Hero() {
  const states = [
    { label: "Andhra Pradesh", value: "AP" },
    { label: "Telangana", value: "TS" },
    { label: "Karnataka", value: "KA" },
    { label: "Tamil Nadu", value: "TN" },
    { label: "Kerala", value: "KL" },
  ]

  const District = [
    { label: "Anantapur", value: "AP01" },
    { label: "Chittoor", value: "AP02" },
    { label: "East Godavari", value: "AP03" },
    { label: "Guntur", value: "AP04" },
    { label: "Krishna", value: "AP05" },
    { label: "Kurnool", value: "AP06" },
    { label: "Nellore", value: "AP07" },
    { label: "Prakasam", value: "AP08" },
    { label: "Srikakulam", value: "AP09" },
    { label: "Visakhapatnam", value: "AP10" },
    { label: "Vizianagaram", value: "AP11" },
    { label: "West Godavari", value: "AP12" },
    { label: "YSR Kadapa", value: "AP13" }
  ]

  const handleSelection = (value) => {
    console.log("Selected", value)
  }
  return (
    <div className="flex justify-evenly flex-col-reverse md:flex-row gap-4 p-4">
      <div className="flex flex-col p-4 gap-2">
        <Dropdown data={states} label="States" onChange={handleSelection} />
        <Dropdown data={District} label="District" onChange={handleSelection} />
        <PrimaryButton className="translate-x-2 md:w-md font-semibold">
          Submit
        </PrimaryButton>
      </div>
      <div className="md:w-1/2 w-full">
        <CropLineChart />
      </div>
    </div>
  )
}
