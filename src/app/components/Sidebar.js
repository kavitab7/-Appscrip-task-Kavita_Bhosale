"use client";
import { useState } from "react";
import styles from "../../styles/Sidebar.module.css";

export default function Sidebar({ onFilterChange }) {
    const [filters, setFilters] = useState({
        customizable: false,
        idealFor: "All",
        occasion: "All",
        work: "All",
        fabric: "All",
        segment: "All",
        suitableFor: "All",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;

        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: newValue,
        }));

        onFilterChange({
            ...filters,
            [name]: newValue,
        });
    };

    const clearFilters = () => {
        const resetFilters = {
            customizable: false,
            idealFor: "All",
            occasion: "All",
            work: "All",
            fabric: "All",
            segment: "All",
            suitableFor: "All",
        };
        setFilters(resetFilters);
        onFilterChange(resetFilters);
    };

    return (
        <aside className={styles.sidebar}>
            <div className={styles.filters}>
                <div className={styles.filterSection}>
                    <label htmlFor="customizable">
                        <input
                            type="checkbox"
                            name="customizable"
                            id="customizable"
                            checked={filters.customizable}
                            onChange={handleChange}
                        />
                        Customizable
                    </label>
                </div>
                <div className={styles.filterSection}>
                    <label htmlFor="idealFor">Ideal For</label>
                    <select
                        name="idealFor"
                        id="idealFor"
                        value={filters.idealFor}
                        onChange={handleChange}
                    >
                        <option>All</option>
                        <option>Men</option>
                        <option>Women</option>
                        <option>Baby & Kids</option>
                    </select>
                </div>
                <div className={styles.filterSection}>
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        name="occasion"
                        id="occasion"
                        value={filters.occasion}
                        onChange={handleChange}
                    >
                        <option>All</option>
                        <option>Casual</option>
                        <option>Formal</option>
                        <option>Party</option>
                    </select>
                </div>
                <div className={styles.filterSection}>
                    <label htmlFor="work">Work</label>
                    <select
                        name="work"
                        id="work"
                        value={filters.work}
                        onChange={handleChange}
                    >
                        <option>All</option>
                        <option>Embroidery</option>
                        <option>Printed</option>
                        <option>Solid</option>
                    </select>
                </div>
                <div className={styles.filterSection}>
                    <label htmlFor="fabric">Fabric</label>
                    <select
                        name="fabric"
                        id="fabric"
                        value={filters.fabric}
                        onChange={handleChange}
                    >
                        <option>All</option>
                        <option>Cotton</option>
                        <option>Silk</option>
                        <option>Wool</option>
                    </select>
                </div>
                <div className={styles.filterSection}>
                    <label htmlFor="segment">Segment</label>
                    <select
                        name="segment"
                        id="segment"
                        value={filters.segment}
                        onChange={handleChange}
                    >
                        <option>All</option>
                        <option>New Arrivals</option>
                        <option>Best Sellers</option>
                        <option>Discounted</option>
                    </select>
                </div>
                <div className={styles.filterSection}>
                    <label htmlFor="suitableFor">Suitable For</label>
                    <select
                        name="suitableFor"
                        id="suitableFor"
                        value={filters.suitableFor}
                        onChange={handleChange}
                    >
                        <option>All</option>
                        <option>Summer</option>
                        <option>Winter</option>
                        <option>Monsoon</option>
                    </select>
                </div>
                <button className={styles.clearButton} onClick={clearFilters}>
                    Clear All Filters
                </button>
            </div>
        </aside>
    );
}
