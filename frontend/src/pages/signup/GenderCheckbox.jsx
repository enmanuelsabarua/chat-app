const GenderCheckbox = () => {
  return (
      <div className="flex mt-4">
          <div className="form-control">
              <label htmlFor="male" className="label gap-2 cursor-pointer">
                  <span className="label-text">Male</span>
                  <input type="radio" id="male" name="gender" className="radio border-slate-500" />
              </label>
          </div>

          <div className="form-control">
              <label htmlFor="female" className="label gap-2 cursor-pointer">
                  <span className="label-text">Female</span>
                  <input type="radio" id="female" name="gender" className="radio border-slate-500" />
              </label>
          </div>

          <div className="form-control">
              <label htmlFor="other" className="label gap-2 cursor-pointer">
                  <span className="label-text">Other</span>
                  <input type="radio" id="other" name="gender" className="radio border-slate-500" />
              </label>
          </div>
          
    </div>
  )
}

export default GenderCheckbox;