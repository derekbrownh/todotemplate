import React, { useState, useEffect } from "react";
import { auth, db} from "./firebase";
import {editEvent} from "./components/editEvent"
import {createEvent} from "./components/createEvent"

export function Edit(props) {
    return(

<div>
        Hello World!
        <createEvent props = {props}/>
</div>

    )
}