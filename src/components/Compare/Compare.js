import React from "react";
import styles from "./styles.module.scss";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Compare({ data }) {
  return (
    data.length !== 0 && (
      <div className={styles.container}>
        <div className={styles.compare}>
          {data.map((elem, index) => (
            <div>
              <div className={styles.image}>
                <img src={elem.titlePhoto} className={styles.dp} />
              </div>
              <div className={styles.data}>
                <div className={styles.first}>
                  {" "}
                  <span>first name:-</span>
                  <span>{elem.firstName}</span>
                </div>
                <div className={styles.first}>
                  <span>Last Name:-</span>
                  <span>{elem.lastName}</span>
                </div>
                <div className={styles.first}>
                  <span>Country:-</span>
                  <span>{elem.country}</span>
                </div>
                <div className={styles.first}>
                  <span>Rating:-</span>
                  <span>{elem.rating}</span>
                </div>
                <div className={styles.first}>
                  <span>Max Rating:-</span>
                  <span>{elem.maxRating}</span>
                </div>
                <div className={styles.first}>
                  <span>Rank:-</span>
                  <span>{elem.rank}</span>
                </div>
                {/* {Object.keys(elem).map((prop, _in) => (
                  <div  className={styles.first}>
                    <span>{prop}: </span>
                    <span>{elem[prop]}</span>
                  </div>
                ))} */}
              </div>
            </div>
          ))}
        </div>
        <BarChart width={500} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="rating" fill="#8884d8" />
          <Bar yAxisId="right" dataKey="maxRating" fill="#82ca9d" />
        </BarChart>
      </div>
    )
  );
}

export default Compare;
