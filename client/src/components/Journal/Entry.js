import React from 'react'

const Entry = (props) => (
    <div>
        <form>
        <div className="form-group">
            <label htmlFor="entryName">Undefined</label>
            <input type="text" className="form-control" id="entryName"/>
        </div>
        <div className="form-group">
            <label htmlFor="entryBody">Write about your day...</label>
            <textarea className="form-control" id="entryBody"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
)

export default Entry;