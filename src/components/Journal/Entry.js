import React from 'react'

const Entry = (props) => (
    <div>
        <form>
        <div className="form-group">
            <label for="entryName">Entry Name</label>
            <input type="text" className="form-control" id="entryName" placeholder="undefined"/>
        </div>
        <div className="form-group">
            <label for="entryBody">Write about your day...</label>
            <textarea className="form-control" id="entryBody"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
)

export default Entry;