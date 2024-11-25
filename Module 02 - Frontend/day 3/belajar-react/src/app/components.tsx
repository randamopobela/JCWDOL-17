export function ComponentA() {
    return (
        <div className="blue" id="componentA">
            component A
        </div>
    );
}

export function ComponentB() {
    return (
        <div
            style={{
                color: "yellow",
                fontSize: "20px",
            }}
        >
            component B
        </div>
    );
}

// Props dalam Component
export function ComponentC({
    nama_component,
    prop2,
}: {
    nama_component: string;
    prop2?: string;
}) {
    return (
        <div>
            {nama_component} {prop2}
        </div>
    );
}
