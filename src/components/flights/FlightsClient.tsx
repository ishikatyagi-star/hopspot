"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { buildWhatsAppLink } from "@/lib/contact";
import { MessageCircle, Search, Users } from "lucide-react";

type Flight = {
  id: string;
  airline: string;
  flightNumber: string;
  origin: { code: string; city: string };
  destination: { code: string; city: string };
  departureDate: string; // YYYY-MM-DD
  departureTime: string; // HH:mm
  arrivalTime: string; // HH:mm
  durationMinutes: number;
  stops: number;
  priceInr: number;
};

function formatDuration(mins: number) {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${h}h ${m}m`;
}

function formatINR(value: number) {
  return value.toLocaleString("en-IN");
}

function normalize(s: string) {
  return s.trim().toLowerCase();
}

function matchAirport(input: string, airport: { code: string; city: string }) {
  const q = normalize(input);
  if (!q) return true;
  const code = airport.code.toLowerCase();
  const city = airport.city.toLowerCase();
  return code.includes(q) || city.includes(q);
}

export function FlightsClient() {
  const [allFlights, setAllFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("/flights.json", { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed to load flights.json (${res.status})`);
        const data = (await res.json()) as Flight[];
        if (!cancelled) setAllFlights(data);
      } catch (e) {
        const msg = e instanceof Error ? e.message : "Unknown error";
        if (!cancelled) setError(msg);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    run();
    return () => {
      cancelled = true;
    };
  }, []);

  const results = useMemo(() => {
    return allFlights
      .filter((f) => matchAirport(origin, f.origin))
      .filter((f) => matchAirport(destination, f.destination))
      .filter((f) => (departureDate ? f.departureDate === departureDate : true))
      .sort((a, b) => a.priceInr - b.priceInr);
  }, [allFlights, origin, destination, departureDate]);

  return (
    <div className="min-h-screen bg-hopspot-bg text-white">
      <header className="border-b border-white/10 bg-hopspot-bg/80 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <Link href="/" className="text-sm font-semibold text-white">
            ← Back to Home
          </Link>
          <div className="text-sm text-white/70">Flights</div>
        </Container>
      </header>

      <main className="py-10">
        <Container>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h1 className="text-2xl font-semibold tracking-tight text-white">
                  Search Flights
                </h1>
                <p className="mt-1 text-sm text-white/60">
                  Mock results (loaded from <code className="text-white/80">/public/flights.json</code>)
                </p>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/70">
                <Users className="h-4 w-4" />
                {passengers} passenger{passengers === 1 ? "" : "s"}
              </div>
            </div>

            <form
              className="mt-6 grid gap-4 md:grid-cols-12"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="md:col-span-3">
                <span className="text-xs font-semibold text-white/70">
                  Origin
                </span>
                <input
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  placeholder="e.g. DEL or Delhi"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-hopspot-bg px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-hopspot-gold/50"
                />
              </label>

              <label className="md:col-span-3">
                <span className="text-xs font-semibold text-white/70">
                  Destination
                </span>
                <input
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="e.g. BOM or Mumbai"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-hopspot-bg px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-hopspot-gold/50"
                />
              </label>

              <label className="md:col-span-2">
                <span className="text-xs font-semibold text-white/70">
                  Departure
                </span>
                <input
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-hopspot-bg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-hopspot-gold/50"
                />
              </label>

              <label className="md:col-span-2">
                <span className="text-xs font-semibold text-white/70">
                  Return
                </span>
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-hopspot-bg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-hopspot-gold/50"
                />
              </label>

              <label className="md:col-span-2">
                <span className="text-xs font-semibold text-white/70">
                  Passengers
                </span>
                <input
                  type="number"
                  inputMode="numeric"
                  min={1}
                  max={9}
                  value={passengers}
                  onChange={(e) => setPassengers(Number(e.target.value || 1))}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-hopspot-bg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-hopspot-gold/50"
                />
              </label>
            </form>

            <div className="mt-6 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Search className="h-4 w-4" />
                {loading ? "Loading flights…" : `${results.length} results`}
              </div>
              <button
                type="button"
                onClick={() => {
                  setOrigin("");
                  setDestination("");
                  setDepartureDate("");
                  setReturnDate("");
                  setPassengers(1);
                }}
                className="text-xs font-semibold text-white/70 hover:text-white"
              >
                Reset
              </button>
            </div>
          </div>

          <div className="mt-8">
            {error ? (
              <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-6 text-sm text-red-100">
                {error}
              </div>
            ) : loading ? (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
                Loading…
              </div>
            ) : results.length === 0 ? (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
                No flights match your search. Try changing origin, destination, or date.
              </div>
            ) : (
              <div className="space-y-4">
                {results.map((f) => {
                  const route = `${f.origin.code} → ${f.destination.code}`;
                  const messageLines = [
                    "Hi Hopspot! I want to book this flight:",
                    `• ${f.airline} ${f.flightNumber}`,
                    `• Route: ${f.origin.city} (${f.origin.code}) → ${f.destination.city} (${f.destination.code})`,
                    `• Departure: ${f.departureDate} ${f.departureTime}`,
                    `• Arrival: ${f.arrivalTime} | Duration: ${formatDuration(f.durationMinutes)} | Stops: ${f.stops}`,
                    `• Price: ₹${formatINR(f.priceInr)} (per passenger)`,
                    `• Passengers: ${passengers}`,
                    returnDate ? `• Return date: ${returnDate}` : null,
                  ].filter(Boolean) as string[];

                  const waHref = buildWhatsAppLink(messageLines.join("\n"));

                  return (
                    <div
                      key={f.id}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-soft"
                    >
                      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-sm font-semibold text-white/80 ring-1 ring-white/10">
                            {f.airline
                              .split(" ")
                              .slice(0, 2)
                              .map((w) => w[0]?.toUpperCase())
                              .join("")}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white">
                              {f.airline}{" "}
                              <span className="text-white/60">{f.flightNumber}</span>
                            </div>
                            <div className="mt-1 text-xs text-white/60">
                              {f.departureDate} • {route}
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3 rounded-xl border border-white/10 bg-hopspot-bg px-4 py-3 text-center text-xs md:w-[440px]">
                          <div>
                            <div className="text-white/55">Depart</div>
                            <div className="mt-1 text-sm font-semibold text-white">
                              {f.departureTime}
                            </div>
                            <div className="mt-0.5 text-white/55">{f.origin.code}</div>
                          </div>
                          <div>
                            <div className="text-white/55">Duration</div>
                            <div className="mt-1 text-sm font-semibold text-white">
                              {formatDuration(f.durationMinutes)}
                            </div>
                            <div className="mt-0.5 text-white/55">
                              {f.stops === 0 ? "Non-stop" : `${f.stops} stop${f.stops === 1 ? "" : "s"}`}
                            </div>
                          </div>
                          <div>
                            <div className="text-white/55">Arrive</div>
                            <div className="mt-1 text-sm font-semibold text-white">
                              {f.arrivalTime}
                            </div>
                            <div className="mt-0.5 text-white/55">
                              {f.destination.code}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between gap-4 md:flex-col md:items-end">
                          <div className="text-right">
                            <div className="text-xs text-white/55">Price</div>
                            <div className="mt-0.5 text-xl font-semibold text-white">
                              ₹{formatINR(f.priceInr)}
                            </div>
                          </div>
                          <a
                            href={waHref}
                            className="inline-flex items-center gap-2 rounded-full bg-hopspot-accent px-4 py-2 text-sm font-semibold text-black hover:brightness-110"
                          >
                            <MessageCircle className="h-4 w-4" />
                            Book via WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </Container>
      </main>
    </div>
  );
}

