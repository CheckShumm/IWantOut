import React, { Component } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  ComposedChart,
  Legend
} from "recharts";
import { Grid, Segment } from "semantic-ui-react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import isEmpty from "../../../validation/is-empty";

class CityQuality extends Component {
  render() {
    const city = this.props.city.quality;
    const cityScores = isEmpty(city) ? [] : city.categories;
    const citySummary = isEmpty(city)
      ? "Quality of Life"
      : city.summary.toString();

    const graphData = [];
    const graphData2 = [];
    for (let i = 0; i < cityScores.length / 2; i++) {
      let score = parseFloat(
        Math.round(cityScores[i].score_out_of_10 * 100) / 100
      ).toFixed(2);
      graphData.push({
        name: cityScores[i].name,
        score: cityScores[i].score_out_of_10,
        fill: cityScores[i].color
      });
      i++;
      graphData2.push({
        name: cityScores[i].name,
        score: cityScores[i].score_out_of_10,
        fill: cityScores[i].color
      });
    }

    return (
      <div>
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Segment raised>
                <div dangerouslySetInnerHTML={{ __html: citySummary }} />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <ComposedChart
                layout="vertical"
                width={400}
                height={300}
                data={graphData}
                margin={{ right: 16, left: 32, bottom: 16 }}
              >
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Bar dataKey="score" barSize={20}>
                  <LabelList dataKey="score" position="right" />
                  {graphData.map((entry, index) => {
                    return <Cell key={entry.name} fill={entry.fill} />;
                  })}
                </Bar>
              </ComposedChart>
            </Grid.Column>
            <Grid.Column>
              <ComposedChart
                layout="vertical"
                width={400}
                height={300}
                data={graphData2}
                margin={{ right: 16, bottom: 16 }}
              >
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Bar dataKey="score" barSize={20}>
                  <LabelList dataKey="score" position="right" />
                  {graphData2.map((entry, index) => {
                    return <Cell key={entry.name} fill={entry.fill} />;
                  })}
                </Bar>
              </ComposedChart>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

CityQuality.propTypes = {
  city: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  city: state.city
});

export default connect(mapStateToProps)(CityQuality);
