import "./Connector.css"

interface ConnectorProps {
    x1: number
    y1: number
    x2: number
    y2: number
}

const Connector = (props: ConnectorProps) => {

    const [x1, y1, x2, y2] = [props.x1, props.y1, props.x2, props.y2]

    const width = Math.abs(x1 - x2)
    const height = Math.abs(y1 - y2)
    const top = Math.min(y1, y2)
    const left = Math.min(x1, x2)
    const lineLength = Math.sqrt(Math.pow(width,2) + Math.pow(height,2))

    function fromTo(): [[number, number], [number, number]] {
        const xComp = x1 - x2
        const yComp = y1 - y2
        // bottom right to top left
        if ((xComp > 0 && yComp > 0) || (xComp < 0 && yComp < 0)) {
            return [[0, 0], [width, height]]
        } else {
            return [[0, height], [width, 0]]
        }
    }

    const [start, end] = fromTo()

    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             className="connector"
             width={width}
             height={height}
             style={{
                 position: 'absolute',
                 top: top + 10,
                 left: left + 10,
             }}
        >
            <path
                className="line"
                d={`m ${start[0]} ${start[1]} L ${end[0]} ${end[1]}`}
                stroke="#FFF"
                strokeWidth="2px"
                style={{
                    strokeDasharray: lineLength,
                    strokeDashoffset: lineLength
                }}
            />
        </svg>
    )
}

export default Connector