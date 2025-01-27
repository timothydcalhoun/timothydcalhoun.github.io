// Simply do everything based on a percentage of window W x H ???
import {WindowSize} from "../../hooks/useWindowSize.tsx";
import {Coordinate} from "../components/ContentContainer.tsx";

function getCoordinates(windowSize: WindowSize): Coordinate[] {
    switch (windowSize) {
        case "xs":
            return []
        case "small":
            return []
        case "medium":
            return []
        case "large":
            return []
        case "extra-large":
            return [
                {x: 200, y: 200},
                {x: 650, y: 100},
                {x: 350, y: 600},
                {x: 1150, y: 100},
                {x: 900, y: 70},
                {x: 800, y: 400},
                {x: 875, y: 700},
                {x: 1125, y: 600}
            ]
    }
}