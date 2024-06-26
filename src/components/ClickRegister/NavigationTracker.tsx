import React, { useState, useEffect } from 'react';

const ClickerColector = ({ children }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (data.length > 0) {
            saveDataToCSV();
        }
    }, [data]);

    const trackClickAndPosition = (event) => {
        const clickData = {
            timestamp: new Date().toISOString(), 
            xPosition: event.pageX, 
            yPosition: event.pageY 
        };

        setData(prevData => [...prevData, clickData]);
    }

    const saveDataToCSV = () => {
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "Timestamp,X Position,Y Position\n";

        data.forEach(click => {
            const localTimestamp = new Date(click.timestamp).toLocaleString();
            csvContent += localTimestamp + "," + click.xPosition + "," + click.yPosition + "\n";
        });

        const encodedUri = encodeURI(csvContent);

        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "navigation_data.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setData([]);
    }

    const handleElementClick = (event) => {
        trackClickAndPosition(event);
    }

    const handleElementMouseDown = (event) => {
        trackClickAndPosition(event);
    }

    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child) && !child.props.onClick && !child.props.onMouseDown) {
            return React.cloneElement(child, {
                onClick: handleElementClick,
                onMouseDown: handleElementMouseDown
            });
        }
        return child;
    });

    return (
        <div>
            {childrenWithProps}
        </div>
    );
}

export default ClickerColector;
