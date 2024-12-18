export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Blogs", link: "#blogs" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize data-driven decision-making, fostering clear communication with stakeholders.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/data1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I specialize in ETL processes, data pipelines, and efficient database management.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack includes advanced SQL, Python, and cloud-based data tools.",
    description: "I constantly explore new ways to automate data processes and enhance BI reporting.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a focus on data visualization and real-time data processing.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/data_grid.svg",
    spareImg: "/data_backup.svg",
  },

  {
    id: 5,
    title: "Building data models and dashboards to enhance decision-making and operations.",
    description: "Developing interactive BI dashboards using Power BI and Tableau.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/bi_dashboard.svg",
    spareImg: "/data_model.svg",
  },
  {
    id: 6,
    title: "Let's collaborate on building data pipelines and business intelligence solutions.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Data Pipeline Automation with Apache Airflow",
    des: "Automated data extraction, transformation, and loading (ETL) workflows using Apache Airflow and Python.",
    img: "/data_pipeline.svg",
    iconLists: ["/python.svg", "/airflow.svg", "/sql.svg", "/docker.svg", "/aws.svg"],
    link: "https://github.com/user/data-pipeline-project",
  },
  {
    id: 2,
    title: "Real-Time Analytics Dashboard with Power BI",
    des: "Built a real-time data analytics dashboard for monitoring KPIs using Power BI and integrating with SQL databases.",
    img: "/powerbi_dashboard.svg",
    iconLists: ["/powerbi.svg", "/sql.svg", "/azure.svg", "/docker.svg"],
    link: "https://github.com/user/powerbi-dashboard",
  },
  {
    id: 3,
    title: "Sales Analytics Platform using AWS Redshift",
    des: "Developed a sales analytics platform with AWS Redshift and AWS Lambda for data warehousing and serverless computation.",
    img: "/sales_analytics.svg",
    iconLists: ["/aws.svg", "/redshift.svg", "/sql.svg", "/python.svg"],
    link: "https://github.com/user/sales-analytics-platform",
  },
  {
    id: 4,
    title: "Data Integration for BI Solutions using ETL Tools",
    des: "Implemented end-to-end data integration solutions using ETL tools like Talend and Apache NiFi.",
    img: "/etl_integration.svg",
    iconLists: ["/talend.svg", "/python.svg", "/aws.svg", "/nifi.svg"],
    link: "https://github.com/user/data-integration-project",
  },
];

export const blogs = [
  {
    title: "Streamlining Data Workflows with SQL and Python",
    content: "In this blog post, I explore how to streamline data workflows using SQL and Python. From database optimization to automating data extraction, these tools can greatly improve the efficiency of your data processes. Learn how to design more efficient queries, create data pipelines, and handle large datasets effortlessly.",
    author: "Maureen",
    date: "May 18, 2024",
    tags: ["SQL", "Python", "Data Engineering", "Automation"],
  },
  {
    title: "Building Scalable Data Pipelines with Apache Airflow",
    content: "Data pipelines are the backbone of any data-driven business. In this post, I'll show you how to build scalable and efficient data pipelines using Apache Airflow. From scheduling tasks to managing workflows, learn how to make your data pipeline robust and maintainable for production environments.",
    author: "Maureen",
    date: "July 10, 2024",
    tags: ["Apache Airflow", "Data Pipelines", "Automation", "Cloud Computing"],
  },
  {
    title: "The Power of Real-Time Analytics and BI Dashboards",
    content: "Real-time analytics is key to making timely business decisions. In this blog, I cover how real-time BI dashboards powered by tools like Power BI or Tableau can give you instant insights. I'll discuss best practices for setting up your data infrastructure for real-time analysis and creating dashboards that are both informative and user-friendly.",
    author: "Maureen",
    date: "December 5, 2024",
    tags: ["Power BI", "Real-Time Analytics", "Business Intelligence", "Data Visualization"],
  },
];


export const companies = [
  {
    id: 1,
    name: "Cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "Appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Hostinger",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "Stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "Docker",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];



export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
