export default function Navbar() {
    return (
        <nav>
            <div className="navbar flex justify-evenly items-center fixed bg-base-100 top-0 z-50">
                <div>
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <details>
                                    <summary>Tentang Kami</summary>
                                    <ul className="p-2">
                                        <li>
                                            <a>Profil Perusahaan</a>
                                        </li>
                                        <li>
                                            <a>Sejarah Perusahaan</a>
                                        </li>
                                        <li>
                                            <a>Manajemen</a>
                                        </li>
                                        <li>
                                            <a>Research and Development</a>
                                        </li>
                                        <li>
                                            <a>Pencapaian</a>
                                        </li>
                                        <li>
                                            <a>Laporan Perusahaan</a>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>Produk & Layanan</summary>
                                    <ul className="p-2">
                                        <li>
                                            <a>Distribusi Kami</a>
                                        </li>
                                        <li>
                                            <a>Produk dan layanan</a>
                                        </li>
                                        <li>
                                            <a>FAQ</a>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>Media dan Informasi</summary>
                                    <ul className="p-2">
                                        <li>
                                            <a>Berita</a>
                                        </li>
                                        <li>
                                            <a>Artikel Kesehatan</a>
                                        </li>
                                        <li>
                                            <a>FAQ Kesehatan</a>
                                        </li>
                                        <li>
                                            <a>Our Procurement</a>
                                        </li>
                                        <li>
                                            <a>Informasi Kunjungan Industri</a>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>Korporasi</summary>
                                    <ul className="p-2">
                                        <li>
                                            <a>Fokus Bisnis Kami</a>
                                        </li>
                                        <li>
                                            <a>Good Corporate Governance</a>
                                        </li>
                                        <li>
                                            <a>Komitmen Kami</a>
                                        </li>
                                        <li>
                                            <a>TJSL</a>
                                        </li>
                                        <li>
                                            <a>LHKPN</a>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>Karir</summary>
                                    <ul className="p-2">
                                        <li>
                                            <a>Rekrutmen</a>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <a>PPID</a>
                            </li>
                            <li>
                                <a>Kontak</a>
                            </li>
                        </ul>
                    </div>
                    <img
                        src="/assets/images/logo-biofarma_thumb.png"
                        width={110}
                        height={60}
                        alt="logo"
                    />
                </div>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary>Tentang Kami</summary>
                                <ul className="p-2">
                                    <li>
                                        <a>Profil Perusahaan</a>
                                    </li>
                                    <li>
                                        <a>Sejarah Perusahaan</a>
                                    </li>
                                    <li>
                                        <a>Manajemen</a>
                                    </li>
                                    <li>
                                        <a>Research and Development</a>
                                    </li>
                                    <li>
                                        <a>Pencapaian</a>
                                    </li>
                                    <li>
                                        <a>Laporan Perusahaan</a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Produk & Layanan</summary>
                                <ul className="p-2">
                                    <li>
                                        <a>Distribusi Kami</a>
                                    </li>
                                    <li>
                                        <a>Produk dan layanan</a>
                                    </li>
                                    <li>
                                        <a>FAQ</a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Media dan Informasi</summary>
                                <ul className="p-2">
                                    <li>
                                        <a>Berita</a>
                                    </li>
                                    <li>
                                        <a>Artikel Kesehatan</a>
                                    </li>
                                    <li>
                                        <a>FAQ Kesehatan</a>
                                    </li>
                                    <li>
                                        <a>Our Procurement</a>
                                    </li>
                                    <li>
                                        <a>Informasi Kunjungan Industri</a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Korporasi</summary>
                                <ul className="p-2">
                                    <li>
                                        <a>Fokus Bisnis Kami</a>
                                    </li>
                                    <li>
                                        <a>Good Corporate Governance</a>
                                    </li>
                                    <li>
                                        <a>Komitmen Kami</a>
                                    </li>
                                    <li>
                                        <a>TJSL</a>
                                    </li>
                                    <li>
                                        <a>LHKPN</a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Karir</summary>
                                <ul className="p-2">
                                    <li>
                                        <a>Rekrutmen</a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <a>PPID</a>
                        </li>
                        <li>
                            <a>Kontak</a>
                        </li>
                    </ul>
                    <button className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}
