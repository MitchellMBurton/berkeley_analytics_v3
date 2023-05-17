  const licensesData = [
    { label: 'License Type', value: 'Trial License' },
    { label: 'Licensee', value: 'mitchmburton@gmail.com' },
    { label: 'Product', value: 'Berkeley Mono Typeface Trial' },
    { label: 'SKU', value: 'TX-01' },
    // { label: 'License #', value: 'HG49-78MY-7GH9-V2K4' },
    {
        label: "License #",
        value: "JG5O-78MQ-7X79-V2LK",
        className: "license-number",
      },
    { label: 'Seats', value: '1' },
    { label: 'Date created', value: '2023-05-13' },
    { label: 'Date issued', value: '2023-05-13' },
    { label: 'Date expires', value: '2023-05-20' },
    { label: 'Status', value: 'ACTIVE', className: 'positive' },
    { label: 'Order', value: 'D9DJ5K5L' },
    { label: 'EULA', value: 'Trial EULA' },
    { label: 'Resources', value: 'Download typeface' },
  ];
  
  const characterBoxData = [
    { character: '░', description: 'Light shade' },
    { character: '▒', description: 'Medium shade' },
    { character: '▓', description: 'Dark shade' },
  ];
  
  // Add the product pricelist data
  const productPricelistData = [
      {
        product: 'Berkeley Mono Trial',
        package: 'Trial Package',
        sku: 'FX-050',
        price: 'No Charge',
        checkout: "View >"
      },
      {
        product: 'Berkeley Mono',
        package: 'Developer Package',
        sku: 'FX-100',
        price: '$75.00',
        checkout: "View >"
      },
      {
        product: 'Berkeley Mono',
        package: 'Indie Package',
        sku: 'FX-200',
        price: '$295.00',
        checkout: "View >"
      },
      {
        product: 'Berkeley Mono',
        package: 'Commercial Package',
        sku: 'FX-500',
        price: 'Inquire',
        checkout: "View >"
      },
    ];
  
  
    const columnData = [
      {
        title: "Analytics interfaces for professionals.",
        content:
          "Graphics — Visual representation of data, as in design and manufacture, in typesetting, in graphic art and illustration; via a human-machine interface, as translation layer converting abstract concepts to the physical, relentlessly pursuing accurate and truthful interpretation. We confide our ethos, judgment, and execution in the fundamentals of graphics, its purpose, and its utility.",
      },
      {
        title: "Design philosophy:",
        content: [
          "Emergent over prescribed aesthetics.",
          "Expose state and inner workings.",
          "Dense, not sparse.",
          "Explicit is better than implicit.",
          "Regiment functionalism.",
          "Performance is design.",
          "Verbosity over opaqueness.",
          "Ignore design trends. Timeless and unfashionable.",
          "Flat, not hierarchical.",
          "Diametrically opposite of minimalism. As complex as it needs to be.",
          "Driven by specifications and datasheets.",
          "Beauty emerges automatically without deliberation.",
          "Do not infantilize users.",
        ],
      },
    ];

    const headersData = {
        main: "Analytics",
        licenses: "Licenses",
        licensesSub: "Berkeley Mono Typeface Trial",
        boxDrawing: "Box Drawing Characters",
        characterBoxes: "Character Boxes",
        productPricelist: "Product Pricelist",
        sample: "Sample Page",
      };
      
      const sampleTextData = "This is a sample page with a simple table using the price list.";