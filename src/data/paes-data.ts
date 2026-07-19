// PAES (Philippine Agricultural Engineering Standards) Data
// Organized by TOS Area and Subcategory
// Sources: https://amtec.uplb.edu.ph/

export type PaesArea = 'A' | 'B' | 'C';

export interface PaesStandard {
  id: string;
  title: string;
  year: number;
  area: PaesArea;
  subcategory: string;
  description: string;
  questionCount: number;
}

export interface PaesSubcategory {
  name: string;
  area: PaesArea;
  standards: PaesStandard[];
}

export const paesSubcategories: PaesSubcategory[] = [
  // ==================== PAES-A: POWER, ENERGY & MACHINERY ====================
  {
    name: 'Production Machinery',
    area: 'A',
    standards: [
      { id: 'PAES-101', title: 'Technical Means for Ensuring Safety - Guidelines', year: 2000, area: 'A', subcategory: 'Production Machinery', description: 'General safety guidelines for agricultural machinery design and operation', questionCount: 100 },
      { id: 'PAES-102', title: "Operator's Manual Content and Presentation", year: 2000, area: 'A', subcategory: 'Production Machinery', description: 'Standards for operator manual content and format', questionCount: 100 },
      { id: 'PAES-103', title: 'Method of Sampling', year: 2000, area: 'A', subcategory: 'Production Machinery', description: 'Standard methods for sampling agricultural machinery for testing', questionCount: 100 },
      { id: 'PAES-104', title: "Location and Method of Operation of Operator's Controls", year: 2000, area: 'A', subcategory: 'Production Machinery', description: 'Standards for control placement and operation on tractors and machinery', questionCount: 100 },
      { id: 'PAES-105', title: 'Symbols for Controls and Displays', year: 2000, area: 'A', subcategory: 'Production Machinery', description: 'Standard symbols for operator controls and displays', questionCount: 100 },
      { id: 'PAES-106', title: 'Soil Tillage and Equipment - Terminology', year: 2000, area: 'A', subcategory: 'Production Machinery', description: 'Standard terminology for soil tillage equipment', questionCount: 100 },
      { id: 'PAES-107', title: 'Hitch for Walking-type Agricultural Tractor - Specifications', year: 2000, area: 'A', subcategory: 'Production Machinery', description: 'Specifications for hitches on walking tractors', questionCount: 100 },
      { id: 'PAES-108', title: 'Hexagonal Axle and Hub for Walking-type Tractor - Specification', year: 2000, area: 'A', subcategory: 'Production Machinery', description: 'Specifications for hexagonal axles and hubs', questionCount: 100 },
      { id: 'PAES-109', title: 'Walking-type Agricultural Tractor Part 1: Pull-type - Specifications', year: 2000, area: 'A', subcategory: 'Production Machinery', description: 'Specifications for pull-type walking tractors', questionCount: 100 },
      { id: 'PAES-110', title: 'Walking-type Agricultural Tractor Part 2: Rotary-tilling Type - Specifications', year: 2001, area: 'A', subcategory: 'Production Machinery', description: 'Specifications for rotary-tilling walking tractors', questionCount: 100 },
      { id: 'PAES-111', title: 'Walking-type Agricultural Tractor - Methods of Test', year: 2000, area: 'A', subcategory: 'Production Machinery', description: 'Test methods for walking tractors', questionCount: 100 },
      { id: 'PAES-112', title: 'Lever-operated Knapsack Sprayer - Specifications', year: 2000, area: 'A', subcategory: 'Production Machinery', description: 'Specifications for lever-operated knapsack sprayers', questionCount: 100 },
      { id: 'PAES-113', title: 'Lever-operated Knapsack Sprayer - Methods of Test', year: 2000, area: 'A', subcategory: 'Production Machinery', description: 'Test methods for knapsack sprayers', questionCount: 100 },
      { id: 'PAES-114', title: 'Centrifugal Pump - Specifications', year: 2000, area: 'A', subcategory: 'Production Machinery', description: 'Specifications for centrifugal pumps', questionCount: 100 },
      { id: 'PAES-115', title: 'Centrifugal, Mixed Flow and Axial Flow Water Pumps - Methods of Test', year: 2000, area: 'A', subcategory: 'Production Machinery', description: 'Test methods for water pumps', questionCount: 100 },
      { id: 'PAES-116', title: 'Small Engine - Specifications', year: 2001, area: 'A', subcategory: 'Production Machinery', description: 'Specifications for small engines used in agriculture', questionCount: 100 },
      { id: 'PAES-117', title: 'Small Engine - Methods of Test', year: 2000, area: 'A', subcategory: 'Production Machinery', description: 'Test methods for small engines', questionCount: 100 },
      { id: 'PAES-120', title: 'Disc Harrow - Specifications', year: 2001, area: 'A', subcategory: 'Production Machinery', description: 'Specifications for disc harrows', questionCount: 100 },
      { id: 'PAES-121', title: 'Disc Plow - Specifications', year: 2001, area: 'A', subcategory: 'Production Machinery', description: 'Specifications for disc plows', questionCount: 100 },
      { id: 'PAES-122', title: 'Seeder and Planter - Specifications', year: 2001, area: 'A', subcategory: 'Production Machinery', description: 'Specifications for seeders and planters', questionCount: 100 },
      { id: 'PAES-123', title: 'Seeder and Planter - Methods of Test', year: 2001, area: 'A', subcategory: 'Production Machinery', description: 'Test methods for seeders and planters', questionCount: 100 },
      { id: 'PAES-124', title: 'Walking-type Tractor Part 3: Float-Assist Tiller - Specifications', year: 2002, area: 'A', subcategory: 'Production Machinery', description: 'Specifications for float-assist tillers', questionCount: 100 },
      { id: 'PAES-125', title: 'Sprinkler Head Part I: Rotating Impact-Driven Type - Specifications', year: 2002, area: 'A', subcategory: 'Production Machinery', description: 'Specifications for rotating sprinkler heads', questionCount: 100 },
      { id: 'PAES-126', title: 'Rotating Sprinkler Head - Methods of Test', year: 2002, area: 'A', subcategory: 'Production Machinery', description: 'Test methods for rotating sprinkler heads', questionCount: 100 },
      { id: 'PAES-127', title: 'Drilling Rig - Specifications', year: 2002, area: 'A', subcategory: 'Production Machinery', description: 'Specifications for drilling rigs', questionCount: 100 },
      { id: 'PAES-128', title: 'Drilling Rig - Methods of Test', year: 2002, area: 'A', subcategory: 'Production Machinery', description: 'Test methods for drilling rigs', questionCount: 100 },
      { id: 'PAES-129', title: 'Electric Motor - Specifications', year: 2002, area: 'A', subcategory: 'Production Machinery', description: 'Specifications for electric motors used in agriculture', questionCount: 100 },
      { id: 'PAES-130', title: 'Electric Motor - Methods of Test', year: 2002, area: 'A', subcategory: 'Production Machinery', description: 'Test methods for electric motors', questionCount: 100 },
      { id: 'PAES-131', title: 'Moldboard Plow - Specifications', year: 2004, area: 'A', subcategory: 'Production Machinery', description: 'Specifications for moldboard plows', questionCount: 100 },
      { id: 'PAES-132', title: 'Disc/Moldboard - Methods of Test', year: 2004, area: 'A', subcategory: 'Production Machinery', description: 'Test methods for disc and moldboard plows', questionCount: 100 },
      { id: 'PAES-133', title: 'Disc Harrow - Methods of Test', year: 2004, area: 'A', subcategory: 'Production Machinery', description: 'Test methods for disc harrows', questionCount: 100 },
      { id: 'PAES-134', title: 'Furrower - Specifications', year: 2004, area: 'A', subcategory: 'Production Machinery', description: 'Specifications for furrowers', questionCount: 100 },
      { id: 'PAES-135', title: 'Furrower - Methods of Test', year: 2004, area: 'A', subcategory: 'Production Machinery', description: 'Test methods for furrowers', questionCount: 100 },
      { id: 'PAES-136', title: 'Agricultural Trailer - Specifications', year: 2004, area: 'A', subcategory: 'Production Machinery', description: 'Specifications for agricultural trailers', questionCount: 100 },
      { id: 'PAES-137', title: 'Agricultural Trailer - Methods of Test', year: 2004, area: 'A', subcategory: 'Production Machinery', description: 'Test methods for agricultural trailers', questionCount: 100 },
      { id: 'PAES-139', title: 'Roll-Over Protective Structures (ROPS) - Specification', year: 2004, area: 'A', subcategory: 'Production Machinery', description: 'Specifications for ROPS on agricultural tractors', questionCount: 100 },
      { id: 'PAES-140', title: 'ROPS - Methods of Test', year: 2004, area: 'A', subcategory: 'Production Machinery', description: 'Test methods for roll-over protective structures', questionCount: 100 },
      { id: 'PAES-141', title: 'Weeder - Specification', year: 2004, area: 'A', subcategory: 'Production Machinery', description: 'Specifications for weeders', questionCount: 100 },
      { id: 'PAES-142', title: 'Weeder - Methods of Test', year: 2004, area: 'A', subcategory: 'Production Machinery', description: 'Test methods for weeders', questionCount: 100 },
      { id: 'PAES-143', title: 'Rice Drum Seeder - Specifications', year: 2005, area: 'A', subcategory: 'Production Machinery', description: 'Specifications for rice drum seeders', questionCount: 100 },
      { id: 'PAES-144', title: 'Rice Drum Seeder - Methods of Test', year: 2005, area: 'A', subcategory: 'Production Machinery', description: 'Test methods for rice drum seeders', questionCount: 100 },
      { id: 'PAES-145', title: 'Granular Fertilizer Applicator - Specifications', year: 2005, area: 'A', subcategory: 'Production Machinery', description: 'Specifications for granular fertilizer applicators', questionCount: 100 },
      { id: 'PAES-146', title: 'Granular Fertilizer Applicator - Methods of Test', year: 2005, area: 'A', subcategory: 'Production Machinery', description: 'Test methods for fertilizer applicators', questionCount: 100 },
      { id: 'PAES-147', title: 'Field Cultivator - Specifications', year: 2010, area: 'A', subcategory: 'Production Machinery', description: 'Specifications for field cultivators', questionCount: 100 },
      { id: 'PAES-148', title: 'Field Cultivator - Methods of Test', year: 2010, area: 'A', subcategory: 'Production Machinery', description: 'Test methods for field cultivators', questionCount: 100 },
      { id: 'PAES-149', title: 'Subsoiler - Specifications', year: 2010, area: 'A', subcategory: 'Production Machinery', description: 'Specifications for subsoilers', questionCount: 100 },
      { id: 'PAES-150', title: 'Subsoiler - Methods of Test', year: 2010, area: 'A', subcategory: 'Production Machinery', description: 'Test methods for subsoilers', questionCount: 100 },
      { id: 'PAES-151', title: 'Mechanical Rice Transplanter - Specifications', year: 2015, area: 'A', subcategory: 'Production Machinery', description: 'Specifications for mechanical rice transplanters', questionCount: 100 },
      { id: 'PAES-152', title: 'Mechanical Rice Transplanter - Methods of Test', year: 2015, area: 'A', subcategory: 'Production Machinery', description: 'Test methods for rice transplanters', questionCount: 100 },
      { id: 'PAES-153', title: 'Hand Pump - Specifications', year: 2010, area: 'A', subcategory: 'Production Machinery', description: 'Specifications for hand pumps', questionCount: 100 },
      { id: 'PAES-154', title: 'Hand Pump - Methods of Test', year: 2010, area: 'A', subcategory: 'Production Machinery', description: 'Test methods for hand pumps', questionCount: 100 },
      { id: 'PAES-155', title: 'Mist Blower - Specifications', year: 2010, area: 'A', subcategory: 'Production Machinery', description: 'Specifications for mist blowers', questionCount: 100 },
      { id: 'PAES-156', title: 'Mist Blower - Methods of Test', year: 2010, area: 'A', subcategory: 'Production Machinery', description: 'Test methods for mist blowers', questionCount: 100 },
      { id: 'PAES-157', title: 'Power Sprayer for Mango - Specifications', year: 2011, area: 'A', subcategory: 'Production Machinery', description: 'Specifications for power sprayers for mango', questionCount: 100 },
      { id: 'PAES-158', title: 'Power Sprayer for Mango - Methods of Test', year: 2011, area: 'A', subcategory: 'Production Machinery', description: 'Test methods for mango power sprayers', questionCount: 100 },
      { id: 'PAES-159', title: 'Sugarcane Planter - Specifications', year: 2011, area: 'A', subcategory: 'Production Machinery', description: 'Specifications for sugarcane planters', questionCount: 100 },
      { id: 'PAES-160', title: 'Sugarcane Planter - Methods of Test', year: 2011, area: 'A', subcategory: 'Production Machinery', description: 'Test methods for sugarcane planters', questionCount: 100 },
      { id: 'PAES-161', title: 'Soil Auger - Specifications', year: 2011, area: 'A', subcategory: 'Production Machinery', description: 'Specifications for soil augers', questionCount: 100 },
      { id: 'PAES-162', title: 'Soil Auger - Methods of Test', year: 2011, area: 'A', subcategory: 'Production Machinery', description: 'Test methods for soil augers', questionCount: 100 },
      { id: 'PAES-163', title: 'Spring-tooth Harrow - Specifications', year: 2011, area: 'A', subcategory: 'Production Machinery', description: 'Specifications for spring-tooth harrows', questionCount: 100 },
      { id: 'PAES-164', title: 'Spring-tooth Harrow - Methods of Test', year: 2011, area: 'A', subcategory: 'Production Machinery', description: 'Test methods for spring-tooth harrows', questionCount: 100 },
      { id: 'PAES-165', title: 'Granule Applicator - Specifications', year: 2011, area: 'A', subcategory: 'Production Machinery', description: 'Specifications for granule applicators', questionCount: 100 },
      { id: 'PAES-166', title: 'Granule Applicator - Methods of Test', year: 2011, area: 'A', subcategory: 'Production Machinery', description: 'Test methods for granule applicators', questionCount: 100 },
      { id: 'PAES-167', title: 'Disc Plow for Walking Type Tractor - Specifications', year: 2015, area: 'A', subcategory: 'Production Machinery', description: 'Specifications for disc plows for walking tractors', questionCount: 100 },
      { id: 'PAES-168', title: 'Disc Plow for Walking Type Tractor - Methods of Test', year: 2015, area: 'A', subcategory: 'Production Machinery', description: 'Test methods for walking tractor disc plows', questionCount: 100 },
      { id: 'PAES-169', title: 'Spike Tooth Harrow for Walking Type Tractor - Specifications', year: 2015, area: 'A', subcategory: 'Production Machinery', description: 'Specifications for spike tooth harrows', questionCount: 100 },
      { id: 'PAES-170', title: 'Spike Tooth Harrow for Walking Type Tractor - Methods of Test', year: 2015, area: 'A', subcategory: 'Production Machinery', description: 'Test methods for walking tractor harrows', questionCount: 100 },
      { id: 'PAES-171', title: 'Rice Precision Seeder - Specifications', year: 2015, area: 'A', subcategory: 'Production Machinery', description: 'Specifications for rice precision seeders', questionCount: 100 },
      { id: 'PAES-172', title: 'Rice Precision Seeder - Methods of Test', year: 2015, area: 'A', subcategory: 'Production Machinery', description: 'Test methods for rice precision seeders', questionCount: 100 },
    ]
  },
  {
    name: 'Post-Harvest Machinery',
    area: 'A',
    standards: [
      { id: 'PAES-201', title: 'Heated Air Mechanical Grain Dryer - Specifications', year: 2015, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Specifications for mechanical grain dryers', questionCount: 100 },
      { id: 'PAES-202', title: 'Heated Air Mechanical Grain Dryer - Methods of Test', year: 2015, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Test methods for grain dryers', questionCount: 100 },
      { id: 'PAES-203', title: 'Moisture Content Determination for Rice and Corn', year: 2000, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Standard methods for moisture content determination', questionCount: 100 },
      { id: 'PAES-204', title: 'Mechanical Rice Thresher - Specifications', year: 2015, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Specifications for rice threshers', questionCount: 100 },
      { id: 'PAES-205', title: 'Mechanical Rice Thresher - Methods of Test', year: 2015, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Test methods for rice threshers', questionCount: 100 },
      { id: 'PAES-208', title: 'Power-Operated Corn Sheller - Specifications', year: 2000, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Specifications for power-operated corn shellers', questionCount: 100 },
      { id: 'PAES-209', title: 'Power-Operated Corn Sheller - Methods of Test', year: 2000, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Test methods for corn shellers', questionCount: 100 },
      { id: 'PAES-212', title: 'Rice Reaper - Specifications', year: 2015, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Specifications for rice reapers', questionCount: 100 },
      { id: 'PAES-213', title: 'Rice Reaper - Methods of Test', year: 2015, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Test methods for rice reapers', questionCount: 100 },
      { id: 'PAES-214', title: 'Rubber Roll for Rice Mill - Specifications', year: 2004, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Specifications for rubber rolls in rice mills', questionCount: 100 },
      { id: 'PAES-215', title: 'Rubber Roll for Rice Mill - Methods of Test', year: 2004, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Test methods for rice mill rubber rolls', questionCount: 100 },
      { id: 'PAES-216', title: 'Hammer Mill - Specifications', year: 2004, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Specifications for hammer mills', questionCount: 100 },
      { id: 'PAES-217', title: 'Hammer Mill - Methods of Test', year: 2004, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Test methods for hammer mills', questionCount: 100 },
      { id: 'PAES-218', title: 'Forage Chopper - Specifications', year: 2004, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Specifications for forage choppers', questionCount: 100 },
      { id: 'PAES-219', title: 'Forage Chopper - Methods of Test', year: 2004, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Test methods for forage choppers', questionCount: 100 },
      { id: 'PAES-220', title: 'Peanut Sheller - Specifications', year: 2004, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Specifications for peanut shellers', questionCount: 100 },
      { id: 'PAES-221', title: 'Peanut Sheller - Methods of Test', year: 2004, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Test methods for peanut shellers', questionCount: 100 },
      { id: 'PAES-222', title: 'Chipping Machine - Specification', year: 2005, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Specifications for chipping machines', questionCount: 100 },
      { id: 'PAES-223', title: 'Chipping Machine - Methods of Test', year: 2005, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Test methods for chipping machines', questionCount: 100 },
      { id: 'PAES-224', title: 'Rice Combine Harvester - Specifications', year: 2015, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Specifications for rice combine harvesters', questionCount: 100 },
      { id: 'PAES-225', title: 'Rice Combine Harvester - Methods of Test', year: 2015, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Test methods for combine harvesters', questionCount: 100 },
      { id: 'PAES-226', title: 'Micromill - Specifications', year: 2005, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Specifications for micromills', questionCount: 100 },
      { id: 'PAES-227', title: 'Micromill - Methods of Test', year: 2005, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Test methods for micromills', questionCount: 100 },
      { id: 'PAES-228', title: 'Fiber Decorticator - Specifications', year: 2005, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Specifications for fiber decorticators', questionCount: 100 },
      { id: 'PAES-229', title: 'Fiber Decorticator - Methods of Test', year: 2005, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Test methods for fiber decorticators', questionCount: 100 },
      { id: 'PAES-230', title: 'Coconut Oil Expeller - Specifications', year: 2005, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Specifications for coconut oil expellers', questionCount: 100 },
      { id: 'PAES-231', title: 'Coconut Oil Expeller - Methods of Test', year: 2005, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Test methods for coconut oil expellers', questionCount: 100 },
      { id: 'PAES-232', title: 'Multicrop Washer-Peeler - Specifications', year: 2008, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Specifications for washer-peelers', questionCount: 100 },
      { id: 'PAES-233', title: 'Multicrop Washer-Peeler - Methods of Test', year: 2008, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Test methods for washer-peelers', questionCount: 100 },
      { id: 'PAES-234', title: 'Multicrop Juice Extractor - Specifications', year: 2008, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Specifications for juice extractors', questionCount: 100 },
      { id: 'PAES-235', title: 'Multicrop Juice Extractor - Methods of Test', year: 2008, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Test methods for juice extractors', questionCount: 100 },
      { id: 'PAES-236', title: 'Crystallizer - Specifications', year: 2008, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Specifications for crystallizers', questionCount: 100 },
      { id: 'PAES-237', title: 'Crystallizer - Methods of Test', year: 2008, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Test methods for crystallizers', questionCount: 100 },
      { id: 'PAES-238', title: 'Multicrop Micromill - Specifications', year: 2008, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Specifications for multicrop micromills', questionCount: 100 },
      { id: 'PAES-239', title: 'Multicrop Micromill - Methods of Test', year: 2008, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Test methods for multicrop micromills', questionCount: 100 },
      { id: 'PAES-240', title: 'Fans and Blowers - Specifications', year: 2010, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Specifications for fans and blowers', questionCount: 100 },
      { id: 'PAES-241', title: 'Fans and Blowers - Methods of Test', year: 2010, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Test methods for fans and blowers', questionCount: 100 },
      { id: 'PAES-242', title: 'Biomass Furnace - Specifications', year: 2010, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Specifications for biomass furnaces', questionCount: 100 },
      { id: 'PAES-243', title: 'Biomass Furnace - Methods of Test', year: 2010, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Test methods for biomass furnaces', questionCount: 100 },
      { id: 'PAES-244', title: 'Biomass Shredder - Specifications', year: 2010, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Specifications for biomass shredders', questionCount: 100 },
      { id: 'PAES-245', title: 'Biomass Shredder - Methods of Test', year: 2010, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Test methods for biomass shredders', questionCount: 100 },
      { id: 'PAES-246', title: 'Dehusked Corn Dryer - Specifications', year: 2010, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Specifications for corn dryers', questionCount: 100 },
      { id: 'PAES-247', title: 'Dehusked Corn Dryer - Methods of Test', year: 2010, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Test methods for corn dryers', questionCount: 100 },
      { id: 'PAES-248', title: 'Fruit Dryer - Specifications', year: 2010, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Specifications for fruit dryers', questionCount: 100 },
      { id: 'PAES-249', title: 'Fruit Dryer - Methods of Test', year: 2010, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Test methods for fruit dryers', questionCount: 100 },
      { id: 'PAES-250', title: 'Coconut Coir Decorticator - Specifications', year: 2011, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Specifications for coconut coir decorticators', questionCount: 100 },
      { id: 'PAES-251', title: 'Coconut Coir Decorticator - Methods of Test', year: 2011, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Test methods for coir decorticators', questionCount: 100 },
      { id: 'PAES-252', title: 'Coffee Pulper - Specifications', year: 2011, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Specifications for coffee pulpers', questionCount: 100 },
      { id: 'PAES-253', title: 'Coffee Pulper - Methods of Test', year: 2011, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Test methods for coffee pulpers', questionCount: 100 },
      { id: 'PAES-254', title: 'Abaca Stripper - Specifications', year: 2011, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Specifications for abaca strippers', questionCount: 100 },
      { id: 'PAES-255', title: 'Abaca Stripper - Methods of Test', year: 2011, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Test methods for abaca strippers', questionCount: 100 },
      { id: 'PAES-256', title: 'Corn Picker - Specifications', year: 2011, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Specifications for corn pickers', questionCount: 100 },
      { id: 'PAES-257', title: 'Corn Picker - Methods of Test', year: 2011, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Test methods for corn pickers', questionCount: 100 },
      { id: 'PAES-258', title: 'Feed Mixer - Specifications', year: 2011, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Specifications for feed mixers', questionCount: 100 },
      { id: 'PAES-259', title: 'Feed Mixer - Methods of Test', year: 2011, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Test methods for feed mixers', questionCount: 100 },
      { id: 'PAES-262', title: 'Multipurpose Thresher - Specifications', year: 2015, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Specifications for multipurpose threshers', questionCount: 100 },
      { id: 'PAES-263', title: 'Multipurpose Thresher - Methods of Test', year: 2015, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Test methods for multipurpose threshers', questionCount: 100 },
      { id: 'PNS-343', title: 'Agricultural and Fishery Commodity Dryer - Specifications', year: 2022, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Specifications for commodity dryers', questionCount: 100 },
      { id: 'PNS-344', title: 'Agricultural and Fishery Commodity Dryer - Methods of Test', year: 2022, area: 'A', subcategory: 'Post-Harvest Machinery', description: 'Test methods for commodity dryers', questionCount: 100 },
    ]
  },
  {
    name: 'Engineering Materials',
    area: 'A',
    standards: [
      { id: 'PAES-301', title: 'V-belts and Pulleys - Specifications and Applications', year: 2000, area: 'A', subcategory: 'Engineering Materials', description: 'Specifications for V-belts and pulleys in agricultural machines', questionCount: 100 },
      { id: 'PAES-302', title: 'Flat Belts and Pulleys - Specifications and Applications', year: 2000, area: 'A', subcategory: 'Engineering Materials', description: 'Specifications for flat belts and pulleys', questionCount: 100 },
      { id: 'PAES-303', title: 'Roller Chains and Sprockets - Specifications and Applications', year: 2000, area: 'A', subcategory: 'Engineering Materials', description: 'Specifications for roller chains and sprockets', questionCount: 100 },
      { id: 'PAES-304', title: 'Keys and Keyways - Specifications and Applications', year: 2000, area: 'A', subcategory: 'Engineering Materials', description: 'Specifications for keys and keyways', questionCount: 100 },
      { id: 'PAES-305', title: 'Shafts - Specifications and Applications', year: 2000, area: 'A', subcategory: 'Engineering Materials', description: 'Specifications for shafts in agricultural machines', questionCount: 100 },
      { id: 'PAES-306', title: 'Spur Gears - Specifications and Applications', year: 2000, area: 'A', subcategory: 'Engineering Materials', description: 'Specifications for spur gears', questionCount: 100 },
      { id: 'PAES-307', title: 'Helical Gears - Specifications and Applications', year: 2001, area: 'A', subcategory: 'Engineering Materials', description: 'Specifications for helical gears', questionCount: 100 },
      { id: 'PAES-308', title: 'Straight Bevel Gears - Specifications and Applications', year: 2001, area: 'A', subcategory: 'Engineering Materials', description: 'Specifications for straight bevel gears', questionCount: 100 },
      { id: 'PAES-309', title: 'Anti-friction Bearings - Specifications and Applications', year: 2001, area: 'A', subcategory: 'Engineering Materials', description: 'Specifications for anti-friction bearings', questionCount: 100 },
      { id: 'PAES-310', title: 'Journal Bearings - Specifications and Applications', year: 2001, area: 'A', subcategory: 'Engineering Materials', description: 'Specifications for journal bearings', questionCount: 100 },
      { id: 'PAES-311', title: 'Bolts and Nuts - Specifications and Applications', year: 2001, area: 'A', subcategory: 'Engineering Materials', description: 'Specifications for bolts and nuts', questionCount: 100 },
      { id: 'PAES-312', title: 'Rivets - Specifications and Applications', year: 2001, area: 'A', subcategory: 'Engineering Materials', description: 'Specifications for rivets', questionCount: 100 },
      { id: 'PAES-313', title: 'Screws - Specifications and Applications', year: 2001, area: 'A', subcategory: 'Engineering Materials', description: 'Specifications for screws', questionCount: 100 },
      { id: 'PAES-314', title: 'Washers - Specifications and Application', year: 2002, area: 'A', subcategory: 'Engineering Materials', description: 'Specifications for washers', questionCount: 100 },
      { id: 'PAES-315', title: 'Pins - Specifications and Application', year: 2002, area: 'A', subcategory: 'Engineering Materials', description: 'Specifications for pins', questionCount: 100 },
      { id: 'PAES-316', title: 'Metal Bars, Pipes, and Tubes - Specifications', year: 2002, area: 'A', subcategory: 'Engineering Materials', description: 'Specifications for metal bars, pipes and tubes', questionCount: 100 },
      { id: 'PAES-317', title: 'Metal Sheets and Plates - Specifications', year: 2002, area: 'A', subcategory: 'Engineering Materials', description: 'Specifications for metal sheets and plates', questionCount: 100 },
      { id: 'PAES-318', title: 'Clutches, Couplings, and Splines - Specifications and Applications', year: 2002, area: 'A', subcategory: 'Engineering Materials', description: 'Specifications for clutches, couplings and splines', questionCount: 100 },
      { id: 'PAES-319', title: 'Engineering Plastics - Specifications and Applications', year: 2002, area: 'A', subcategory: 'Engineering Materials', description: 'Specifications for engineering plastics', questionCount: 100 },
      { id: 'PAES-320', title: 'Wood-based Panels - Specifications', year: 2002, area: 'A', subcategory: 'Engineering Materials', description: 'Specifications for wood-based panels', questionCount: 100 },
    ]
  },
  // ==================== PAES-B: LAND & WATER RESOURCES ====================
  {
    name: 'Irrigation Structures',
    area: 'B',
    standards: [
      { id: 'PNS-216', title: 'General Irrigation Terminologies', year: 2017, area: 'B', subcategory: 'Irrigation Structures', description: 'Standard irrigation terminologies and definitions', questionCount: 100 },
      { id: 'PNS-217', title: 'Determination of Irrigation Water Requirements', year: 2017, area: 'B', subcategory: 'Irrigation Structures', description: 'Methods for determining irrigation water requirements', questionCount: 100 },
      { id: 'PNS-218', title: 'Open Channels - Design of Main Canals, Laterals and Farm Ditches', year: 2017, area: 'B', subcategory: 'Irrigation Structures', description: 'Design standards for open channel irrigation systems', questionCount: 100 },
      { id: 'PNS-219', title: 'Conveyance Systems - Performance Evaluation by Ponding Method', year: 2017, area: 'B', subcategory: 'Irrigation Structures', description: 'Evaluation of seepage and percolation in open channels', questionCount: 100 },
      { id: 'PNS-220', title: 'Conveyance Systems - Performance Evaluation by Inflow-Outflow Method', year: 2017, area: 'B', subcategory: 'Irrigation Structures', description: 'Inflow-outflow method for channel performance evaluation', questionCount: 100 },
      { id: 'PNS-221', title: 'Design of Canal Structures - Road Crossing, Drop, Siphon and Elevated Flume', year: 2017, area: 'B', subcategory: 'Irrigation Structures', description: 'Design standards for canal structures', questionCount: 100 },
      { id: 'PNS-222', title: 'Design of Basin, Border and Furrow Irrigation Systems', year: 2017, area: 'B', subcategory: 'Irrigation Structures', description: 'Design standards for surface irrigation systems', questionCount: 100 },
      { id: 'PNS-223', title: 'Design of Pressurized Irrigation System Part A: Sprinkler Irrigation', year: 2017, area: 'B', subcategory: 'Irrigation Structures', description: 'Design standards for sprinkler irrigation systems', questionCount: 100 },
      { id: 'PNS-224', title: 'Design of Pressurized Irrigation System Part B: Drip Irrigation', year: 2017, area: 'B', subcategory: 'Irrigation Structures', description: 'Design standards for drip irrigation systems', questionCount: 100 },
      { id: 'PNS-225', title: 'Rainwater and Runoff Management - Small Water Impounding System', year: 2017, area: 'B', subcategory: 'Irrigation Structures', description: 'Standards for small water impounding systems', questionCount: 100 },
      { id: 'PNS-226', title: 'Rainwater and Runoff Management - Small Farm Reservoir', year: 2017, area: 'B', subcategory: 'Irrigation Structures', description: 'Standards for small farm reservoirs', questionCount: 100 },
      { id: 'PNS-227', title: 'Design of a Small Reservoir Irrigation System', year: 2017, area: 'B', subcategory: 'Irrigation Structures', description: 'Design standards for small reservoir irrigation', questionCount: 100 },
      { id: 'PNS-228', title: 'Design of a Rockfill Dam', year: 2017, area: 'B', subcategory: 'Irrigation Structures', description: 'Design standards for rockfill dams', questionCount: 100 },
      { id: 'PNS-229', title: 'Design of a Diversion Dam', year: 2017, area: 'B', subcategory: 'Irrigation Structures', description: 'Design standards for diversion dams', questionCount: 100 },
      { id: 'PNS-230', title: 'Design of a Check Dam', year: 2017, area: 'B', subcategory: 'Irrigation Structures', description: 'Design standards for check dams', questionCount: 100 },
      { id: 'PNS-231', title: 'Groundwater Irrigation - Shallow Tubewell', year: 2017, area: 'B', subcategory: 'Irrigation Structures', description: 'Standards for shallow tubewell irrigation', questionCount: 100 },
      { id: 'PNS-232', title: 'Wastewater Re-use for Irrigation', year: 2017, area: 'B', subcategory: 'Irrigation Structures', description: 'Standards for wastewater reuse in irrigation', questionCount: 100 },
      { id: 'PAES-421', title: 'Farm to Market Roads (Earth, Gravel, Bituminous, Concrete)', year: 2009, area: 'B', subcategory: 'Irrigation Structures', description: 'Standards for farm to market roads', questionCount: 100 },
    ]
  },
  // ==================== PAES-C: STRUCTURES, ENVIRONMENT & BIOPROCESS ====================
  {
    name: 'Agricultural Structures',
    area: 'C',
    standards: [
      { id: 'PAES-401', title: 'Housing for Swine Production', year: 2001, area: 'C', subcategory: 'Agricultural Structures', description: 'Design standards for swine housing', questionCount: 100 },
      { id: 'PAES-402', title: 'Housing for Broiler Production', year: 2001, area: 'C', subcategory: 'Agricultural Structures', description: 'Design standards for broiler housing', questionCount: 100 },
      { id: 'PAES-403', title: 'Housing for Layer Production', year: 2001, area: 'C', subcategory: 'Agricultural Structures', description: 'Design standards for layer chicken housing', questionCount: 100 },
      { id: 'PAES-404', title: 'Housing for Goat and Sheep', year: 2001, area: 'C', subcategory: 'Agricultural Structures', description: 'Design standards for goat and sheep housing', questionCount: 100 },
      { id: 'PAES-405', title: 'Cattle Feedlot', year: 2001, area: 'C', subcategory: 'Agricultural Structures', description: 'Design standards for cattle feedlots', questionCount: 100 },
      { id: 'PAES-406', title: 'Cattle Ranch', year: 2001, area: 'C', subcategory: 'Agricultural Structures', description: 'Design standards for cattle ranches', questionCount: 100 },
      { id: 'PAES-407', title: 'Housing for Dairy Cattle', year: 2001, area: 'C', subcategory: 'Agricultural Structures', description: 'Design standards for dairy cattle housing', questionCount: 100 },
      { id: 'PAES-408', title: 'Carabao Feedlot', year: 2001, area: 'C', subcategory: 'Agricultural Structures', description: 'Design standards for carabao feedlots', questionCount: 100 },
      { id: 'PAES-409', title: 'Milking Parlor', year: 2002, area: 'C', subcategory: 'Agricultural Structures', description: 'Design standards for milking parlors', questionCount: 100 },
      { id: 'PAES-410', title: 'Lairage for Swine, Small and Large Animals', year: 2000, area: 'C', subcategory: 'Agricultural Structures', description: 'Design standards for lairage facilities', questionCount: 100 },
      { id: 'PAES-411', title: 'Slaughterhouse for Swine, Small and Large Animals', year: 2000, area: 'C', subcategory: 'Agricultural Structures', description: 'Design standards for slaughterhouses', questionCount: 100 },
      { id: 'PAES-412', title: 'Poultry Dressing Plant', year: 2002, area: 'C', subcategory: 'Agricultural Structures', description: 'Design standards for poultry dressing plants', questionCount: 100 },
      { id: 'PAES-413', title: 'Biogas Plant', year: 2001, area: 'C', subcategory: 'Agricultural Structures', description: 'Design standards for biogas plants', questionCount: 100 },
      { id: 'PAES-414-1', title: 'Waste Management Part I: Agricultural Liquid Wastes', year: 2002, area: 'C', subcategory: 'Agricultural Structures', description: 'Standards for liquid waste management', questionCount: 100 },
      { id: 'PAES-414-2', title: 'Waste Management Part II: Agricultural Solid Waste - Composting', year: 2002, area: 'C', subcategory: 'Agricultural Structures', description: 'Standards for solid waste composting', questionCount: 100 },
      { id: 'PAES-415', title: 'Greenhouses', year: 2001, area: 'C', subcategory: 'Agricultural Structures', description: 'Design standards for greenhouses', questionCount: 100 },
      { id: 'PAES-416', title: 'Plant Tissue Culture Laboratory', year: 2002, area: 'C', subcategory: 'Agricultural Structures', description: 'Design standards for tissue culture labs', questionCount: 100 },
      { id: 'PAES-417', title: 'Fruit and Vegetable Storage', year: 2002, area: 'C', subcategory: 'Agricultural Structures', description: 'Design standards for fruit and vegetable storage', questionCount: 100 },
      { id: 'PAES-418', title: 'Primary Processing Plant for Fresh Fruit and Vegetable', year: 2002, area: 'C', subcategory: 'Agricultural Structures', description: 'Design standards for primary processing plants', questionCount: 100 },
      { id: 'PAES-419', title: 'Warehouse for Bagged Storage of Grains', year: 2000, area: 'C', subcategory: 'Agricultural Structures', description: 'Design standards for grain warehouses', questionCount: 100 },
      { id: 'PAES-420', title: 'Farm Workshop and Machinery Shed', year: 2002, area: 'C', subcategory: 'Agricultural Structures', description: 'Design standards for farm workshops and machinery sheds', questionCount: 100 },
      { id: 'PNS-270', title: 'Agricultural Infrastructures - Silo', year: 2019, area: 'C', subcategory: 'Agricultural Structures', description: 'Standards for agricultural silos', questionCount: 100 },
      { id: 'PNS-289', title: 'Farm-to-Market Roads - Concrete Roads', year: 2018, area: 'C', subcategory: 'Agricultural Structures', description: 'Standards for concrete farm-to-market roads', questionCount: 100 },
      { id: 'PNS-308', title: 'Agricultural Structure - Lairage Swine', year: 2021, area: 'C', subcategory: 'Agricultural Structures', description: 'Updated standards for swine lairage', questionCount: 100 },
      { id: 'PNS-309', title: 'Agricultural Structure - Lairage Ruminants', year: 2021, area: 'C', subcategory: 'Agricultural Structures', description: 'Updated standards for ruminant lairage', questionCount: 100 },
      { id: 'PNS-364', title: 'Biogas System - Wet Anaerobic Digestion Process', year: 2023, area: 'C', subcategory: 'Agricultural Structures', description: 'Specifications for biogas wet anaerobic digestion', questionCount: 100 },
    ]
  }
];

export function getPaesStandardsByArea(area: PaesArea): PaesSubcategory[] {
  return paesSubcategories.filter(s => s.area === area);
}

export function getPaesStandardById(id: string): PaesStandard | undefined {
  for (const cat of paesSubcategories) {
    const found = cat.standards.find(s => s.id === id);
    if (found) return found;
  }
  return undefined;
}

export function countPaesStandardsByArea(area: PaesArea): number {
  return paesSubcategories
    .filter(s => s.area === area)
    .reduce((sum, cat) => sum + cat.standards.length, 0);
}
