import { createContext, useContext, useEffect, useState } from "react";
import { verifyService } from "../services/auth.service";
import axios from "axios"
import AppState from "../interfaces/Interfaces"

type State = {

}

const AuthContext = createContext({} as AppState)

