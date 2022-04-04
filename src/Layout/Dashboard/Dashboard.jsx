import React, { useEffect, useState } from "react";
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { Title } from "../Review/ReviewsStyled";
import { ChartWrapper } from "./DashboardStyled";

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div>
            <Title>DASHBOARD</Title>
            <ChartWrapper>
                <LineChart
                    width={400}
                    height={200}
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                    <Line
                        type="monotone"
                        dataKey="investment"
                        stroke="#82ca9d"
                    />
                </LineChart>
                <AreaChart
                    width={400}
                    height={200}
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <defs>
                        <linearGradient
                            id="colorUv"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="#8884d8"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#8884d8"
                                stopOpacity={0}
                            />
                        </linearGradient>
                        <linearGradient
                            id="colorPv"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="#82ca9d"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#82ca9d"
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="#8884d8"
                        fillOpacity={1}
                        fill="url(#colorUv)"
                    />
                    <Area
                        type="monotone"
                        dataKey="investment"
                        stroke="#82ca9d"
                        fillOpacity={1}
                        fill="url(#colorPv)"
                    />
                </AreaChart>
                <BarChart
                    width={400}
                    height={200}
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="revenue" fill="#8884d8" />
                    <Bar dataKey="investment" fill="#82ca9d" />
                </BarChart>
                <RadarChart
                    outerRadius={90}
                    width={300}
                    height={250}
                    data={data}
                >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="month" />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} />
                    <Radar
                        dataKey="revenue"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.6}
                    />
                    <Radar
                        dataKey="investment"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                        fillOpacity={0.6}
                    />
                    <Legend />
                </RadarChart>
            </ChartWrapper>
        </div>
    );
};

export default Dashboard;
