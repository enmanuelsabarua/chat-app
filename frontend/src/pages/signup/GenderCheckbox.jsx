const GenderCheckbox = ({ onRadioChange, selectedGender }) => {
    return (
        <div className="flex mt-4">
            <div className="form-control">
                <label htmlFor="male" className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
                    <span className="label-text">Male</span>
                    <input type="radio" id="male" name="gender" className="radio border-slate-500" checked={selectedGender === 'male'} onChange={() => onRadioChange("male")} />
                </label>
            </div>

            <div className="form-control">
                <label htmlFor="female" className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
                    <span className="label-text">Female</span>
                    <input type="radio" id="female" name="gender" className="radio border-slate-500" checked={selectedGender === 'female'} onChange={() => onRadioChange("female")} />
                </label>
            </div>

            <div className="form-control">
                <label htmlFor="other" className={`label gap-2 cursor-pointer ${selectedGender === "other" ? "selected" : ""}`}>
                    <span className="label-text">Other</span>
                    <input type="radio" id="other" name="gender" className="radio border-slate-500" checked={selectedGender === 'other'} onChange={() => onRadioChange("other")} />
                </label>
            </div>

        </div>
    )
}

export default GenderCheckbox;