import React, { useState } from "react";

const Repositories = ({
  repositories,
  onDeleteRepo,
  onNewRepo,
  onDeleteAcc,
  notFoundRepo,
}) => {
  const [newRepo, setNewRepo] = useState("");
  return (
    <div className="div">
      <div className="repositories">
        <h2 className="title">Repositórios</h2>{
        !repositories.length ? (
          <p className="noRepo">
            Não há repositórios que correspondem à pesquisa.
          </p>
        ) : (
          <ul className="list">
            {repositories.map((repository) => (
              <li className="item" key={repository._id}>
                <div className="info">
                  <div className="owner">
                    {repository.name.substring(0, repository.name.indexOf("/"))}
                  </div>
                  <div className="name">
                    {repository.name.substring(
                      repository.name.indexOf("/") + 1
                    )}
                  </div>
                  <div className="link"></div>
                </div>
                <a href={repository.url} target="_blank">
                  <button>Acessar Repo</button>
                </a>
                <button onClick={() => onDeleteRepo(repository)}>Apagar</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="new">
        <label htmlFor="new-repo">Novo Repositório:</label>
        <input
          type="url"
          name="new-repo"
          className="new-repo"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />
        <button onClick={() => onNewRepo(newRepo)}>Adcionar</button>
      </div>
      <div className="deleteAcc">
        <button className="deleteAccBtn" onClick={onDeleteAcc}>
          Exclua esta Conta
        </button>
      </div>
    </div>
  );
};

export default Repositories;
