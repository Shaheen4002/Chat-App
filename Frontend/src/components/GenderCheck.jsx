/* eslint-disable react/prop-types */

const GenderCheck = ({onGenderCheck , selectedGender}) => {
  return (
    <div className="flex mt-2">
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
                <span className="label-text">Male</span>
                <input type="checkbox" className="checkbox border-slate-900"
                checked = {selectedGender === "male"}
                onChange={() => onGenderCheck("male")}
                />
            </label>
        </div>
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
                <span className="label-text">Female</span>
                <input type="checkbox" className="checkbox border-slate-900"
                checked = {selectedGender === "female"}
                onChange={() => onGenderCheck("female")}
                />
            </label>
        </div>
    </div>
  )
}

export default GenderCheck