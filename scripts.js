const w = 1000;
const h = 650;

fetch(
  'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json'
)
  .then(res => res.json())
  .then(data => {
    const baseTemp = data.baseTemperature;
    const all = data.monthlyVariance;

    const svg = d3.select('svg').attr('width', w).attr('height', h);
    console.log(data);

    const xScale = d3.scaleLinear().domain([1754, 2015]).range([0, 900]);

    const xAxis = d3.axisBottom(xScale).tickFormat(d3.format('d'));
    svg.append('g').call(xAxis).attr('transform', 'translate(55, 600)');

    const yScale = d3.scaleLinear().domain([0.5, 12.5]).range([0, 550]);
    const yAxis = d3.axisLeft(yScale).tickFormat(d => {
      return `${
        d === 1
          ? 'January'
          : d === 2
          ? 'February'
          : d === 3
          ? 'March'
          : d === 4
          ? 'April'
          : d === 5
          ? 'May'
          : d === 6
          ? 'June'
          : d === 7
          ? 'July'
          : d === 8
          ? 'August'
          : d === 9
          ? 'September'
          : d === 10
          ? 'October'
          : d === 11
          ? 'November'
          : d === 12
          ? 'December'
          : ''
      }`;
    });
    svg.append('g').call(yAxis).attr('transform', 'translate(55,50)');

    svg
      .append('rect')
      .attr('fill', 'blue')
      .attr('width', 20)
      .attr('height', 15)
      .attr('x', 0)
      .attr('y', 0);
    svg
      .append('text')
      .text('3°C')
      .attr('x', 0)
      .attr('y', 25)
      .style('font-size', '0.5rem');

    svg
      .append('rect')
      .attr('fill', 'lightblue')
      .attr('width', 20)
      .attr('height', 15)
      .attr('x', 20)
      .attr('y', 0);
    svg
      .append('text')
      .text('4°C')
      .attr('x', 20)
      .attr('y', 25)
      .style('font-size', '0.5rem');

    svg
      .append('rect')
      .attr('fill', 'lightsteelblue')
      .attr('width', 20)
      .attr('height', 15)
      .attr('x', 40)
      .attr('y', 0);
    svg
      .append('text')
      .text('5°C')
      .attr('x', 40)
      .attr('y', 25)
      .style('font-size', '0.5rem');

    svg
      .append('rect')
      .attr('fill', 'rgb(162, 162, 255)')
      .attr('width', 20)
      .attr('height', 15)
      .attr('x', 60)
      .attr('y', 0);
    svg
      .append('text')
      .text('6°C')
      .attr('x', 60)
      .attr('y', 25)
      .style('font-size', '0.5rem');

    svg
      .append('rect')
      .attr('fill', 'rgb(250, 250, 158)')
      .attr('width', 20)
      .attr('height', 15)
      .attr('x', 80)
      .attr('y', 0);
    svg
      .append('text')
      .text('7°C')
      .attr('x', 80)
      .attr('y', 25)
      .style('font-size', '0.5rem');

    svg
      .append('rect')
      .attr('fill', 'rgb(250, 218, 158)')
      .attr('width', 20)
      .attr('height', 15)
      .attr('x', 100)
      .attr('y', 0);
    svg
      .append('text')
      .text('8°C')
      .attr('x', 100)
      .attr('y', 25)
      .style('font-size', '0.5rem');

    svg
      .append('rect')
      .attr('fill', 'rgb(192, 142, 49)')
      .attr('width', 20)
      .attr('height', 15)
      .attr('x', 120)
      .attr('y', 0);
    svg
      .append('text')
      .text('9°C')
      .attr('x', 120)
      .attr('y', 25)
      .style('font-size', '0.5rem');

    svg
      .append('rect')
      .attr('fill', 'rgb(116, 36, 5)')
      .attr('width', 20)
      .attr('height', 15)
      .attr('x', 140)
      .attr('y', 0);
    svg
      .append('text')
      .text('10°C')
      .attr('x', 140)
      .attr('y', 25)
      .style('font-size', '0.5rem');
    svg
      .append('rect')
      .attr('fill', 'red')
      .attr('width', 20)
      .attr('height', 15)
      .attr('x', 160)
      .attr('y', 0);
    svg
      .append('text')
      .text('11°C')
      .attr('x', 163)
      .attr('y', 25)
      .style('font-size', '0.5rem');

    svg
      .selectAll('rect')
      .data(all)
      .enter()
      .append('rect')
      .attr('x', (d, i) => xScale(d.year))
      .attr('y', (d, i) => yScale(d.month))
      .attr('width', 3.8)
      .attr('height', 46)
      .attr('class', 'bar')
      .attr('transform', 'translate(60,26)')
      .attr(
        'fill',
        d =>
          `${
            baseTemp + d.variance > 1 && baseTemp + d.variance < 4
              ? 'blue'
              : baseTemp + d.variance >= 4 && baseTemp + d.variance <= 5
              ? 'lightblue'
              : baseTemp + d.variance >= 5 && baseTemp + d.variance <= 6
              ? 'lightsteelblue'
              : baseTemp + d.variance >= 6 && baseTemp + d.variance <= 7
              ? 'rgb(162, 162, 255)'
              : baseTemp + d.variance >= 7 && baseTemp + d.variance <= 8
              ? 'rgb(250, 250, 158)'
              : baseTemp + d.variance >= 8 && baseTemp + d.variance <= 9
              ? 'rgb(250, 218, 158)'
              : baseTemp + d.variance >= 9 && baseTemp + d.variance <= 10
              ? 'rgb(192, 142, 49)'
              : baseTemp + d.variance >= 10 && baseTemp + d.variance <= 11
              ? 'rgb(116, 36, 5)'
              : baseTemp + d.variance >= 11
              ? 'red'
              : ''
          }`
      )
      .attr('data-year', d => d.year)
      .attr('data-month', d => {
        return `${
          d.month === 1
            ? 'January'
            : d.month === 2
            ? 'February'
            : d.month === 3
            ? 'March'
            : d.month === 4
            ? 'April'
            : d.month === 5
            ? 'May'
            : d.month === 6
            ? 'June'
            : d.month === 7
            ? 'July'
            : d.month === 8
            ? 'August'
            : d.month === 9
            ? 'September'
            : d.month === 10
            ? 'October'
            : d.month === 11
            ? 'November'
            : d.month === 12
            ? 'December'
            : ''
        }`;
      })
      .attr('data-temp', d => (baseTemp + d.variance).toFixed(1))
      .attr('data-variance', d => d.variance.toFixed(1));

    const bars = document.getElementsByClassName('bar');

    for (let i = 0; i < bars.length; i++) {
      bars[i].addEventListener('mouseover', e => {
        const tooltip = document.getElementById('tooltip');
        tooltip.innerHTML = `<p>${e.target.getAttribute(
          'data-year'
        )} - ${e.target.getAttribute('data-month')}</p>
        <p>${e.target.getAttribute('data-temp')}°C</p>
        <p>${e.target.getAttribute('data-variance')}°C</p>`;
        tooltip.style.opacity = 1;
        tooltip.style.top = e.y + 'px';
        tooltip.style.left = `${
          e.x < 850 ? e.x + 10 + 'px' : e.x - 180 + 'px'
        }`;
      });

      bars[i].addEventListener('mouseleave', e => {
        const tooltip = document.getElementById('tooltip');

        tooltip.style.opacity = 0;
        tooltip.style.top = 0;
        tooltip.style.left = 0;
      });
    }

    document.getElementById(
      'desc'
    ).innerHTML = `Base temperature: ${baseTemp}°C`;
  })
  .catch(err => console.log(err));
