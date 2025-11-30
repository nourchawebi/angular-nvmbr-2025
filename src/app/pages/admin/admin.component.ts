import { Component } from '@angular/core';
import {ChartData, ChartOptions} from "chart.js";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  // Example: sales data table (could also come from API)
  salesData = [
    { month: 'January', productA: 120, productB: 90, productC: 70 },
    { month: 'February', productA: 150, productB: 110, productC: 95 },
    { month: 'March', productA: 200, productB: 130, productC: 100 },
    { month: 'April', productA: 170, productB: 100, productC: 80 },
  ];

  // Function to generate dynamic colors in HSL
  private generateColors(count: number): string[] {
    return Array.from({ length: count }, () =>
      `hsl(${Math.floor(Math.random() * 360)}, 70%, 55%)`
    );
  }

  // Pie Chart
  pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [
      {
        data: [
          this.salesData.reduce((sum, row) => sum + row.productA, 0),
          this.salesData.reduce((sum, row) => sum + row.productB, 0),
          this.salesData.reduce((sum, row) => sum + row.productC, 0),
        ],
        backgroundColor: this.generateColors(3),
      },
    ],
  };

  pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: 'Total Sales Distribution (Products)',
      },
    },
  };

  // Bar Chart
  barChartData: ChartData<'bar'> = {
    labels: this.salesData.map(row => row.month),
    datasets: [
      {
        label: 'Product A',
        data: this.salesData.map(row => row.productA),
        backgroundColor: this.generateColors(this.salesData.length),
      },
      {
        label: 'Product B',
        data: this.salesData.map(row => row.productB),
        backgroundColor: this.generateColors(this.salesData.length),
      },
      {
        label: 'Product C',
        data: this.salesData.map(row => row.productC),
        backgroundColor: this.generateColors(this.salesData.length),
      },
    ],
  };

  barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: 'Monthly Sales by Product',
      },
    },
    scales: {
      y: { beginAtZero: true }
    }
  };

  // Line Chart
  lineChartData: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        label: 'Sales 2024',
        data: [50, 80, 60, 90],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Sales 2025',
        data: [70, 60, 100, 120],
        borderColor: 'green',
        backgroundColor: 'rgba(0, 255, 0, 0.1)',
        fill: true,
        tension: 0.4
      },
    ],
  };

  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Sales Trend Comparison'
      }
    }
  };

  // Doughnut Chart
  doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [{
      data: [120, 150, 90],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      borderWidth: 2
    }],
  };

  doughnutChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Product Sales Distribution'
      }
    }
  };
}
